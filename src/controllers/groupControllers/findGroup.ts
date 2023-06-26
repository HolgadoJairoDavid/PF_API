// encuentra un Group segun los datos proporcionados
// retorna una lista de Groups
import Group from '../../models/Group'

const findGroup = async (groupProps: object) => {
  const groups = await Group.find(groupProps)

  return groups
}

export default findGroup