const { ObjectId } = require('mongodb');

// Devuelve la puntuacion que obtuvo un usuario en cada juego
import Ranking from "../../models/Ranking";
// este tambien de contar la cantidad de veces que se jugo
const getRankingInGameByUser = async (userID:string) => {
  const rankings = await Ranking.aggregate([
    {
      $match: {
        userID: new ObjectId(userID)
      }
    },
    {
      $group: {
        _id: "$gameID",
        total: {
          $sum: "$points",
        },
        timesPlayed: {
          $sum: 1,
        }
      },
    },
    {
      $lookup: {
        from: "games",
        localField: "_id",
        foreignField: "_id",
        as: "game",
      },
    },
  ])

  return rankings;
};

export default getRankingInGameByUser;
