// encuentra un Ranking segun los datos proporcionados
// retorna una lista de Rankings
import Ranking from '../../models/Ranking'

const findRanking = async (rankingProps: object) => {
  const ranking = await Ranking.find(rankingProps)

  return ranking
}

export default findRanking