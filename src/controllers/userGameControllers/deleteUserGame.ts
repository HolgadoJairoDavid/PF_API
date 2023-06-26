import UserGame from '../../models/UserGame'

const deleteUserGame = async (id: any) => {

  const deletedUserGame = await UserGame.findByIdAndUpdate(id, {isDeleted: true}, { new: true })

  return deletedUserGame
}

export default deleteUserGame