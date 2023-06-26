import { prop, getModelForClass } from '@typegoose/typegoose'

class Game {
  

  @prop()
  name: string

  @prop()
  description: string

  @prop()
  genres: string

  @prop()
  stars: string

  // obligatorio para todas las colecciones
  @prop({required: true, default: false})
  isDeleted: boolean

}

const GameModel = getModelForClass(Game)

export default GameModel