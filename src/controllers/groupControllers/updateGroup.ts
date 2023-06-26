import Group from '../../models/Group'

const updateGroup = async (groupData: any) => {

  const updateGroup = await Group.findByIdAndUpdate(groupData._id, groupData, { new: true })

  return updateGroup
}

export default updateGroup