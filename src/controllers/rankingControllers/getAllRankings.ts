import Ranking from '../../models/Ranking'

const getAllRankings = async () => {

  const Rankings = await Ranking.find({isDeleted: false})

  return Rankings
}

export default getAllRankings