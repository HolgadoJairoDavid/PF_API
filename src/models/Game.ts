import { prop, getModelForClass } from '@typegoose/typegoose'

export class Game {

  @prop()
  name: string

  @prop()
  description: string

  @prop()
  stars: number

  @prop()
  image: string

  @prop()
  url: string

  @prop({required: true, default: false})
  isOwn: boolean

  // obligatorio para todas las colecciones
  @prop({required: true, default: false})
  isDeleted: boolean

}

const GameModel = getModelForClass(Game)

export default GameModel