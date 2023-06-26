import UserGame from '../../models/UserGame'

const updateUserGame = async (userGameData: any) => {

  const updateUserGame = await UserGame.findByIdAndUpdate(userGameData._id, userGameData, { new: true })

  return updateUserGame
}

export default updateUserGame