import Ranking from "../../models/Ranking";

const getCohortRanking = async (cohort: string) => {
  // const Rankings = await Ranking.find().populate({path: 'user', select: 'name'})
  if(!cohort) throw new Error("Cohort cannot be undefined")

  const rankings = await Ranking.aggregate([
    {
      $match: {
        cohort: cohort
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

export default getCohortRanking;
