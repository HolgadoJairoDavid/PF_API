import User from '../../models/User'

const updateUser = async (id: string, userData:any) => {

  const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true })

  return updatedUser
}

export default updateUser