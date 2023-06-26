import User from '../../models/User'

const deleteUser = async (id: string) => {

  const updatedUser = await User.findByIdAndUpdate(id, {isDeleted: true}, {new: true})

  
  return updatedUser
}

export default deleteUser