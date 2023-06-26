import { prop, getModelForClass } from '@typegoose/typegoose'

class Chat {
  
  
  @prop()
  content: string

  @prop()
  date: string

  @prop()
  user: string

  @prop()
  group: string

  // obligatorio para todas las colecciones
  @prop({required: true, default: false})
  isDeleted: boolean

}

const ChatModel = getModelForClass(Chat)

export default ChatModel