import Game from '../../models/Game'

const createGame = async (gameData: any) => {

  const newGame = await Game.create(gameData)

  return newGame
}

export default createGame