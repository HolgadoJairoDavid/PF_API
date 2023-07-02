const { ObjectId } = require('mongodb');
import Ranking from "../../models/Ranking";


// Devuelve un ranking de los jugadores que obtuvieron más puntos en un juego
const getRankingOfGame = async (gameID:string) => {
  const rankings = await Ranking.aggregate([
    {
      $match: {
        gameID: new ObjectId(gameID)
      }
    },
    {
      $group: {
        _id: "$userID",
        total: {
          $sum: "$points",
        },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "user",
      },
    },
  ]).sort({ total: -1 });


  return rankings;
};

export default getRankingOfGame;
