import Ranking from "../../models/Ranking";

const getGeneralRanking = async () => {
  // const Rankings = await Ranking.find().populate({path: 'user', select: 'name'})
  const rankings = await Ranking.aggregate([
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

export default getGeneralRanking;
