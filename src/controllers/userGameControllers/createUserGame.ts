import UserGame from '../../models/UserGame'

const createUserGame = async (userGameData: any) => {

  const newUserGame = await UserGame.create(userGameData)

  return newUserGame
}

export default createUserGame