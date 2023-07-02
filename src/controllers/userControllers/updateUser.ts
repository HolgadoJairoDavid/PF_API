import { isCohortValid } from '../../helpers/validations'
import Group from '../../models/Group'
import User from '../../models/User'

const updateUser = async (id: string, userData:any) => {

 if (userData.cohort) {
   if(!isCohortValid(userData.cohort)) throw new Error("Cohort Name not allowed. Cannot update the document.")
 }

  const updatedUser:any = await User.findByIdAndUpdate(id, userData, { new: true })

  const group = await Group.find({
    $and: [
      {groupNumber: updatedUser.group},
      {cohort: updatedUser.cohort}
    ]
  })

  return {...updatedUser._doc, groupDetail: group}
}

export default updateUser