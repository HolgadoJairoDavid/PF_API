import Ranking from '../../models/Ranking'

const getRankingByID = async (id: string) => {

  const ranking = await Ranking.findById(id)

  return ranking
}

export default getRankingByID