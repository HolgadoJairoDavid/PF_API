import User from '../../models/User'

const postDev = async (devData: any) => {
  const results = await User.updateMany({newMessages: {}})
  return results
}

export default postDev