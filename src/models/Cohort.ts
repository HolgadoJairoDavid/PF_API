import { prop, getModelForClass } from '@typegoose/typegoose'

class Cohort {
  
  // webft37a, webft39a
  @prop({required: true, unique: true })
  name: string

  // obligatorio para todas las colecciones
  @prop({required: true, default: false})
  isDeleted: boolean

}

const CohortModel = getModelForClass(Cohort)

export default CohortModel