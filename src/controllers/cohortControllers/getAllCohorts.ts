import Cohort from '../../models/Cohort'

const getAllCohorts = async () => {

  const cohorts = await Cohort.find({isDeleted: false})

  return cohorts
}

export default getAllCohorts