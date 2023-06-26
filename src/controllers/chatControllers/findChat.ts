import Chat from '../../models/Chat'

const findChat = async (chatProps: object) => {
  const chats = await Chat.find(chatProps)

  return chats
}

export default findChat