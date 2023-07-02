import User from '../../models/User'

const searchUsers = async (email: string) => {
  const result = await User.find({email: {$regex: email, $options: "i"}, isDeleted: false})
  
  return result
}

export default searchUsers