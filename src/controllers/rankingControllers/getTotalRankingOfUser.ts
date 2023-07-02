const { ObjectId } = require('mongodb');
import Ranking from "../../models/Ranking";


// Devuelve el total de puntos que obtuvo un usuario
const getTotalRankingOfUser = async (userID:string) => {
  const rankings = await Ranking.aggregate([
    {
      $match: {
        userID: new ObjectId(userID)
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
    
  ])

  return rankings;
};

export default getTotalRankingOfUser;
