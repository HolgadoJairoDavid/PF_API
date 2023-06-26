import "dotenv/config";
import session from 'supertest'
import mongoose from 'mongoose';
import app from '../src/app'

const agent = session(app);
describe('Test de rutas', ()=>{
  let mongoClient: typeof mongoose
  let agent:any

  const objUser = {
    username: 'clarkkent',
    password: 'superman',
    email: 'clarkkent@smallville.com'
  }

  beforeAll(async ()=>{
    // mongoClient = await connectDb(process.env.DB_LOCAL_TEST as string)
    mongoClient = await  mongoose.connect(process.env.DB_LOCAL_TEST as string)
    agent = session(app);
  })

  afterAll(async ()=>{
    await mongoClient.connection.close()
  })

  afterEach(async ()=>{
    await mongoClient.connection.db.dropDatabase()
  })

  describe('POST /auth/signup', ()=>{
    it('Responde con estado 200', async ()=>{
      const response = await agent.post('/auth/signup').send(objUser)
      expect(response.statusCode).toEqual(200)
    })

    it('Responde un objeto con las propiedades: "id", "username", "password", "email"', async ()=>{
      const {body} = await agent.post('/auth/signup').send(objUser)
      
      const properties  = ['_id', 'username', 'password', 'email']
      properties.forEach((prop) => {
        expect(body).toHaveProperty(prop)
      })
    })


    // it('Si hay un error responde con status: 400', async ()=>{
    //   // cuando no se proporcionan todos los datos
    //   const response = await agent.post('/auth/signup', objUser);
    //   expect(response.statusCode).toEqual(400)
    // })

  })
})