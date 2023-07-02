import Ranking from '../../models/Ranking'

const createManyRanking = async (manyRankingsData: any) => {
  const newRankings = await Ranking.insertMany(manyRankingsData)

  return newRankings
}

export default createManyRanking