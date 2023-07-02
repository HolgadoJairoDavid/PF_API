import express from 'express'
import morgan from 'morgan'
import {Server as SocketServer} from 'socket.io'
import http from 'http'
import cors from 'cors'
import passport from 'passport'
import passportMiddleware from './middlewares/passport'
import router from './routes'
import findUsersByGroup from './controllers/userControllers/findUsersByGroup'
import Message from './models/Message'
import User from './models/User'

// initializations
const app = express()
const httpServer = http.createServer(app)

const io = new SocketServer(httpServer, {
  cors: {
    origin: '*'
  }
})

// middlewares
app.use(morgan('dev'))
app.use(cors({
  origin: '*'
}))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(passport.initialize())
passport.use(passportMiddleware)


app.use('/', router)

// socket
interface IUser {
  _id: string,
  socketId: string
}

let users:IUser[] = []


// ! ////////

const getLastMessagesFromRoom = async (room: string) => {
  let roomMessages = await Message.aggregate([
    {$match: {to: room}},
    {$group: {_id: '$date', messagesByDate: {$push: '$$ROOT'}}}
  ])
  return roomMessages
}

const sortRoomMessagesByDate = (messages: any) => {
  return messages.sort(function(a: any, b: any) {
    let date1 = a._id.split('/')
    let date2 = b._id.split('/')
    date1 = date1[2] + date1[0] + date1[1]
    date2 = date2[2] + date2[0] + date2[1]
    return date1 < date2 ? -1 : 1
  })
}

// ! ////////

io.on('connection', (socket) => {
  console.log("connected", socket.id)

  socket.on("userData",async (userId)=>{
    if(!userId) return;

    const match = users.find(user => user._id === userId)
    console.log('USUARIO envia su id: ', userId);
    if(match){
      match.socketId = socket.id
      const user:any = await User.findById(match?._id)
      console.log('USUARIO conectado: '+ user.name);
      user.status = 'online'
      await user.save()

      const members = await User.find()

      socket.broadcast.emit('new-user', members)
    } else {
      users.push({_id: userId , socketId: socket.id })
    }
    // console.log( 'Id de usuario: ', userId);
  })

  socket.on('disconnect', async () => {
   
    const match = users.find(user => user.socketId === socket.id)
    try {
      const user:any = await User.findById(match?._id)
      console.log('USUARIO desconectado: '+ user.name);
      user.status = 'offline'
      await user.save()

      const members = await User.find()

      socket.broadcast.emit('new-user', members)
      users = users.filter(user=>user.socketId !== socket.id)
    } catch (error) {
      console.log('Mire, un error' + error)
    }



   console.log('desconectado', socket.id);
  });

  // ! ////////

  socket.on('new-user', async () => {
    const members = await User.find()
    // members.forEach(m => console.log(m.status))
    io.emit('new-user', members)
  })

  socket.on('join-room', async (room) => {
    socket.join(room)
    let roomMessages = await getLastMessagesFromRoom(room)
    roomMessages = sortRoomMessagesByDate(roomMessages)
    // socket.emit('room-messages', roomMessages)
    socket.emit('room-messages', {room, messages: roomMessages})
  })

  socket.on('message-room', async(room, content, sender, time, date) => {
    console.log(`Nuevo mensaje: ${content}`)
    const newMessage = await Message.create({
      content,
      from: sender,
      time,
      date,
      to: room
    })
    let roomMessages = await getLastMessagesFromRoom(room)
    roomMessages = sortRoomMessagesByDate(roomMessages)
    // io.to(room).emit('room-messages', roomMessages)
    io.to(room).emit('room-messages', {room, messages: roomMessages})
    socket.broadcast.emit('notifications', room)
  })

  app.post('/logout', async(req, res) => {

    console.log(req.body.name, req.body.email)

    try {
      
      const {_id, newMessages} = req.body
      
      console.log(_id)

      const user:any = await User.findById(_id)

      user.status = 'offline'

      user.newMessages = newMessages

      await user.save()

      const members = await User.find()

      socket.broadcast.emit('new-user', members)

      res.status(200).send()

    } catch (error) {
      
      console.log('Mire, un error' + error)

      res.status(400).send()

    }
  })

  // ! ////////

})

//export default app
export default httpServer