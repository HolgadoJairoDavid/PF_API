import User from '../../models/User'

const banUser = async (id: string) => {

  const updatedUser = await User.findByIdAndUpdate(id, {isBanned: true}, {new: true})

  
  return updatedUser
}

export default banUser