import Ranking from '../../models/Ranking'

// Crea un ranking de conteo para los juegos de terceros
// recibe userID, gameID, cohort, group
const createCountRanking = async (rankingData: any) => {

  rankingData.points = 0
  // rankingData.isOwn = false

  const newRanking = await Ranking.create(rankingData)

  return newRanking
}

export default createCountRanking