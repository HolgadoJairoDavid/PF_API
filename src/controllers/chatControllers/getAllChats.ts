import Chat from '../../models/Chat'

const getAllChats = async () => {

  const chats = await Chat.find({isDeleted: false})

  return chats
}

export default getAllChats