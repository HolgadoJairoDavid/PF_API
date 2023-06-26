import User from '../../models/User'

const getUserByID = async (id: string) => {

  const user = await User.findById(id)

  return user
}

export default getUserByID