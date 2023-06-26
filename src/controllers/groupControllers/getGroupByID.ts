import Group from '../../models/Group'

const getGroupByID = async (id: string) => {

  const group = await Group.findById(id)

  return group
}

export default getGroupByID