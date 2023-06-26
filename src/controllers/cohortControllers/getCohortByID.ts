import Cohort from '../../models/Cohort'

const getCohortByID = async (id: string) => {

  const cohort = await Cohort.findById(id)

  return cohort
}

export default getCohortByID