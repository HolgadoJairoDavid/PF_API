import Chat from '../../models/Chat'

const deleteChat = async (id: any) => {

  const deletedChat = await Chat.findByIdAndUpdate(id, {isDeleted: true}, { new: true })

  return deletedChat
}

export default deleteChat