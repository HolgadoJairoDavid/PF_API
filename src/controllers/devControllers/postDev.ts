import User from '../../models/User'

const postDev = async (devData: any) => {
  const results = await User.updateMany({status: "offline"})
  return results
}

export default postDev