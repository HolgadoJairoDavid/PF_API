import User from '../../models/User'

const updateMany = async () => {
  const results = await User.updateMany({status: 'offline'})
  return results
}

export default updateMany