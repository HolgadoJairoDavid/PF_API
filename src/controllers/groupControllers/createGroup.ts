import Group from '../../models/Group'

const createGroup = async (groupData: any) => {

  const newGroup = await Group.create(groupData)

  return newGroup
}

export default createGroup