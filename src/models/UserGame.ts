import { prop, getModelForClass } from '@typegoose/typegoose'

class UserGame {

  @prop()
  game: string

  @prop()
  user: string

  @prop()
  stars: string

  @prop()
  isFavorite: string

  // obligatorio para todas las colecciones
  @prop({required: true, default: false})
  isDeleted: boolean

}

const UserGameModel = getModelForClass(UserGame)

export default UserGameModel