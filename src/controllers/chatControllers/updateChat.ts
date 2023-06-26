import Chat from '../../models/Chat'

const updateChat = async (chatData: any) => {

  const updateChat = await Chat.findByIdAndUpdate(chatData._id, chatData, { new: true })

  return updateChat
}

export default updateChat