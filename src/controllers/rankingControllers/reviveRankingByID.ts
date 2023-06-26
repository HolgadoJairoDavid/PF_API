import Ranking from '../../models/Ranking'

const reviveRankingByID = async (id: any) => {

  const revivedRanking = await Ranking.findByIdAndUpdate(id, {isDeleted: false}, { new: true })

  return revivedRanking
}

export default reviveRankingByID