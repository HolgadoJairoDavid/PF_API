import Group from '../../models/Group'

const deleteGroup = async (id: any) => {
  
  const deletedGroup = await Group.findByIdAndUpdate(id, {isDeleted: true}, { new: true })

  return deletedGroup
}

export default deleteGroup