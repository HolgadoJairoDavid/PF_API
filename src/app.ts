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
  name: string,
  group: string,
  socketId: string,
  isConnected: boolean
}

let group: object[] = []

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
  
  /* socket.on('userData', async (userData) =>  {//
    const {user} = userData

    if(!group.length){
      const usersGroup = await findUsersByGroup(user.group)
      group = usersGroup
    }
    
    const newUser:any = group.find( (u:any) => u.email === user.email)

    if(!newUser){
      console.log(group, user)
      console.log(typeof(user._id))
    }
    newUser.socketID = socket.id
    newUser.isConnected = true
    
    socket.emit('currentData', group)
    socket.broadcast.emit('currentData', group)
  }) */

  socket.on('message',(message) => {
    socket.broadcast.emit('message', {
      body: message.body,
      from: message.from
    })
  })

  socket.on('logout', (userData) => {
    const logoutUser:any  = group.find((user:any)=> user.email === userData.email)
    if(logoutUser)
      logoutUser.isConnected = false

    console.log('logout', userData.name);
    socket.broadcast.emit('disconnected', logoutUser)
  });
  socket.on('disconnect', () => {
    const disconnectedUser:any = group.find((user:any)=> user.isConnected && user.socketID === socket.id)
    if(disconnectedUser)
      disconnectedUser.isConnected = false

    console.log('disconnect', socket.id);
  });

  // ! ////////

  socket.on('new-user', async () => {
    const members = await User.find()
    members.forEach(m => console.log(m.status))
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

    console.log(req.body)

    try {
      
      const {_id, newMessages} = req.body

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