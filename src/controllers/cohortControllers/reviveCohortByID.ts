import Cohort from '../../models/Cohort'

const reviveCohortByID = async (id: any) => {

  const revivedCohort = await Cohort.findByIdAndUpdate(id, {isDeleted: false}, { new: true })

  return revivedCohort
}

export default reviveCohortByID