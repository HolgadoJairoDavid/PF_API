import User from '../../models/User'

const getAllUsers = async () => {

  const users = await User.find({isDeleted: false})

  return users
}

export default getAllUsers