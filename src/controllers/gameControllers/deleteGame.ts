import Game from '../../models/Game'

const deleteGame = async (id: any) => {

  const deletedGame = await Game.findByIdAndUpdate(id, {isDeleted: true}, { new: true })

  return deletedGame
}

export default deleteGame