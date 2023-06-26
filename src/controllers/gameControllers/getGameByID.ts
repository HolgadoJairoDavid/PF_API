import Game from '../../models/Game'

const getGameByID = async (id: string) => {

  const game = await Game.findById(id)

  return game
}

export default getGameByID