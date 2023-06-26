import { prop, getModelForClass } from '@typegoose/typegoose'

class Group {
  
  // 02, 01
  @prop({required: true})
  name: string

  // obligatorio para todas las colecciones
  @prop({required: true, default: false})
  isDeleted: boolean

}

const GroupModel = getModelForClass(Group)

export default GroupModel