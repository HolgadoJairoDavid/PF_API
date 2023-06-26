import Cohort from '../../models/Cohort'

const updateCohort = async (cohortData: any) => {

  const updateCohort = await Cohort.findByIdAndUpdate(cohortData._id, cohortData, { new: true })

  return updateCohort
}

export default updateCohort