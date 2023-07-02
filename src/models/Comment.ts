import { prop, getModelForClass } from '@typegoose/typegoose'

class Comment {

  @prop()
  game: string

  @prop()
  comment: string

  @prop()
  stars: string

  @prop()
  email: string

  // obligatorio para todas las colecciones
  @prop({required: true, default: false})
  isDeleted: boolean

}

const CommentModel = getModelForClass(Comment)

export default CommentModel


