import Chat from '../../models/Chat'

const reviveChatByID = async (id: any) => {

  const revivedChat = await Chat.findByIdAndUpdate(id, {isDeleted: false}, { new: true })

  return revivedChat
}

export default reviveChatByID