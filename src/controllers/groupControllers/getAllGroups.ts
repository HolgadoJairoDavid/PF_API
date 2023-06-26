import Group from '../../models/Group'

const getAllGroups = async () => {

  const groups = await Group.find({isDeleted: false})

  return groups
}

export default getAllGroups