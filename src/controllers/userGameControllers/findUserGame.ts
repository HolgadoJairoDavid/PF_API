// encuentra un UserGame segun los datos proporcionados
// retorna una lista de UserGames
import UserGame from '../../models/UserGame'

const findUserGame = async (userGameProps: object) => {
  const userGame = await UserGame.find(userGameProps)

  return userGame
}

export default findUserGame