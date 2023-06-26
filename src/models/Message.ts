import { prop, getModelForClass } from '@typegoose/typegoose'

class Message {

  @prop()
  content: string

  @prop()
  from: object

  @prop()
  socketid: string

  @prop()
  time: string

  @prop()
  date: string

  @prop()
  to: string

}

const MessageModel = getModelForClass(Message)

export default MessageModel