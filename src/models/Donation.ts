import { prop, getModelForClass } from '@typegoose/typegoose'

class Donation {
  
  @prop()
  email: string

  @prop()
  name: string

  @prop()
  currency_code: string

  @prop()
  value: string

}

const DonationModel = getModelForClass(Donation)

export default DonationModel