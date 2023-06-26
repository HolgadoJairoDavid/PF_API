import { prop, getModelForClass } from '@typegoose/typegoose'



class User {

  @prop({required: true, unique: true })
  email: string

  @prop()
  password: string

  @prop()
  username: string

  @prop()
  name: string

  @prop()
  lastName: string
  
  @prop()
  cohort: string
  
  @prop()
  group: string

  // Fecha de nacimiento cualquier formato -> 10/12/2000 2000-10-06
  @prop()
  birthdate: Date

  // país
  @prop()
  country: string

  // Método de autenticación, un objeto con los métodos
  // {type: 'google', token: 'valor del token'}
  @prop()
  authMethod: object

  @prop({required: true, default: false})
  isBanned: boolean

  @prop({required: true, default: false})
  isDeleted: boolean

  @prop()
  image: string

  // ! ////////

  // New chat props

  @prop({default: {test: 'required_property'}})
  newMessages: object

  @prop({default: 'offline'})
  status: string

  // ! ////////
}

const UserModel = getModelForClass(User)

export default UserModel