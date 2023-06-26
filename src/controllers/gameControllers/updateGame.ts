import Game from "../../models/Game"

const updateGame = async (gameData: any) => {

    const updateGame = await Game.findByIdAndUpdate(gameData._id, gameData, { new: true })
  
    return updateGame
  }
  
  export default updateGame