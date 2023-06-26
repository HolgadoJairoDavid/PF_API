import Ranking from '../../models/Ranking'

const deleteRanking = async (id: any) => {

  const deletedRanking = await Ranking.findByIdAndUpdate(id, {isDeleted: true}, { new: true })

  return deletedRanking
}

export default deleteRanking