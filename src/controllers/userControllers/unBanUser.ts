import User from '../../models/User'

const unBanUser = async (id: any) => {

  const revivedUser = await User.findByIdAndUpdate(id, {isBanned: false}, { new: true })

  return revivedUser
}

export default unBanUser