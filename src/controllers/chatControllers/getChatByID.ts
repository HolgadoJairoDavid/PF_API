import Chat from '../../models/Chat'

const getChatByID = async (id: string) => {

  const chat = await Chat.findById(id)

  return chat
}

export default getChatByID