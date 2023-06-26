import Cohort from '../../models/Cohort'

const deleteCohort = async (id: any) => {

  const deletedCohort = await Cohort.findByIdAndUpdate(id, {isDeleted: true}, { new: true })

  return deletedCohort
}

export default deleteCohort