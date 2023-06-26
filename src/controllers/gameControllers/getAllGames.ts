import Game from "../../models/Game";

const getAllGames = async () =>{

    const games = await Game.find({isDeleted: false})

    return games
}

export default getAllGames