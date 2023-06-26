import Ranking from '../../models/Ranking'

const updateRanking = async (rankingData: any) => {

  const updateRanking = await Ranking.findByIdAndUpdate(rankingData._id, rankingData, { new: true })

  return updateRanking
}

export default updateRanking