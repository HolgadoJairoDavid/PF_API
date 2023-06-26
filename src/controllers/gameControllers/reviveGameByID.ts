import Game from '../../models/Game'

const reviveGameByID = async (id: any) => {

  const revivedGame = await Game.findByIdAndUpdate(id, {isDeleted: false}, { new: true })

  return revivedGame
}

export default reviveGameByID