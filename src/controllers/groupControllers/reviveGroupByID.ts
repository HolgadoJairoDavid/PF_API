import Group from '../../models/Group'

const reviveGroupByID = async (id: any) => {

  const revivedGroup = await Group.findByIdAndUpdate(id, {isDeleted: false}, { new: true })

  return revivedGroup
}

export default reviveGroupByID