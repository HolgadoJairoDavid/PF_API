import User from '../../models/User'

const reviveUserByID = async (id: any) => {

  const revivedUser = await User.findByIdAndUpdate(id, {isDeleted: false}, { new: true })

  return revivedUser
}

export default reviveUserByID