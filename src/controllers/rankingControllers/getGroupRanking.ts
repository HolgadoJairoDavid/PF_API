import Ranking from "../../models/Ranking";

const getGroupRanking = async (cohort: any, group: any) => {
  // const Rankings = await Ranking.find().populate({path: 'user', select: 'name'})
  if(!cohort) throw new Error("Cohort cannot be undefined")
  if(!group) throw new Error("Group cannot be undefined")

  const rankings = await Ranking.aggregate([
    {
      $match: {
        cohort: cohort,
        group: group
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

export default getGroupRanking;
