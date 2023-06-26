import Game from '../../models/Game'

const findGame = async (gameProps: object) => {
  const games = await Game.find(gameProps)

  return games
}

export default findGame