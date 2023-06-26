import UserGame from '../../models/UserGame'

const reviveUserGameByID = async (id: any) => {

  const revivedUserGame = await UserGame.findByIdAndUpdate(id, {isDeleted: false}, { new: true })

  return revivedUserGame
}

export default reviveUserGameByID