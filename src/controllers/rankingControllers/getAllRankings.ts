import Ranking from '../../models/Ranking'

const getAllRankings = async () => {

  const rankings = await Ranking.find({isDeleted: false})

  return rankings
}

export default getAllRankings