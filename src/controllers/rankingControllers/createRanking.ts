import Ranking from '../../models/Ranking'

const createRanking = async (rankingData: any) => {

  const newRanking = await Ranking.create(rankingData)

  return newRanking
}

export default createRanking