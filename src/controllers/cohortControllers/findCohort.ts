// encuentra un Cohort segun los datos proporcionados
// retorna una lista de Cohorts
import Cohort from '../../models/Cohort'

const findCohort = async (cohortProps: object) => {
  const cohorts = await Cohort.find(cohortProps)

  return cohorts
}

export default findCohort