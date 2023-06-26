import UserGame from '../../models/UserGame'

const getUserGameByID = async (id: string) => {

  const userGame = await UserGame.findById(id)

  return userGame
}

export default getUserGameByID