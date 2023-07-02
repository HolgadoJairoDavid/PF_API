import { prop, Ref, getModelForClass } from '@typegoose/typegoose'
import {User} from './User';
import {Game} from './Game';


class Ranking {

  @prop({required: true, ref: 'User'})
  userID: Ref<User>

  @prop({required: true, ref: 'User'})
  gameID: Ref<Game>

  @prop({required: true})
  cohort: string

  @prop({required: true})
  group: string
  
  @prop({required: true})
  points: number

  @prop()
  date: Date

  // Es propio o de terceros
  @prop({required: true, default: false})
  isOwn: boolean

  // obligatorio para todas las colecciones
  @prop({required: true, default: false})
  isDeleted: boolean

}

const RankingModel = getModelForClass(Ranking)

export default RankingModel