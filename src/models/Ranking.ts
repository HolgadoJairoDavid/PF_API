import { prop, getModelForClass } from '@typegoose/typegoose'

class Ranking {

  @prop()
  user: string

  @prop()
  cohorte: string
  
  @prop()
  points: string

  @prop()
  date: string

  @prop()
  type: string

  // obligatorio para todas las colecciones
  @prop({required: true, default: false})
  isDeleted: boolean

}

const RankingModel = getModelForClass(Ranking)

export default RankingModel