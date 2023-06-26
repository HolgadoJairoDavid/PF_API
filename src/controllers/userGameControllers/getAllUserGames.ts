import UserGame from '../../models/UserGame'

const getAllUserGames = async () => {

  const userGames = await UserGame.find({isDeleted: false})

  return userGames
}

export default getAllUserGames