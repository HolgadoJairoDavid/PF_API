import Chat from '../../models/Chat'

const createChat = async (chatData: any) => {

  const newChat = await Chat.create(chatData)

  return newChat
}

export default createChat