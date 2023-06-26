import Cohort from '../../models/Cohort'

const createCohort = async (cohortData: any) => {

  const newCohort = await Cohort.create(cohortData)

  return newCohort
}

export default createCohort