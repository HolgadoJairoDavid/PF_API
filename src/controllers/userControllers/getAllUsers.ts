import User from '../../models/User'

const getAllUsers = async () => {

  const users = await User.find()

  return users
}

export default getAllUsers