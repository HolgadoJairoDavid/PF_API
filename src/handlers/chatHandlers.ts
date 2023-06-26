import {RequestHandler} from 'express'
import createChat from '../controllers/chatControllers/createChat' 
import getAllChats from '../controllers/chatControllers/getAllChats' 
import updateChat from '../controllers/chatControllers/updateChat' 
import deleteChat from '../controllers/chatControllers/deleteChat' 
import findChat from '../controllers/chatControllers/findChat' 
import getChatByID from '../controllers/chatControllers/getChatByID' 
import reviveChatByID from '../controllers/chatControllers/reviveChatByID' 

export const createChatHandler:RequestHandler = async (req, res) => {
  const ChatData = req.body
  try {
  
    console.log('malparido')
    
    const newChat = await createChat(ChatData)
    res.status(200).json(newChat)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const getAllChatsHandler:RequestHandler = async (req, res) => {
  try {
  
    
    const Chats = await getAllChats()
    res.status(200).json(Chats)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const updateChatHandler:RequestHandler = async (req, res) => {
  const ChatData = req.body
  try {
  
    
    const updatedChat = await updateChat(ChatData)
    res.status(200).json(updatedChat)
    
  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const deleteChatHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
  
    
    const deletedChat = await deleteChat(id)
    res.status(200).json(deletedChat)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const findChatHandler:RequestHandler = async (req, res) => {
  const ChatProps = req.body
  try {
  
    
    const Chat = await findChat(ChatProps)
    res.status(200).json(Chat)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const getChatByIDHandler:RequestHandler = async (req, res) => {
    const {id} = req.params
    try {
      
    
        const Chat = await getChatByID(id)
    res.status(200).json(Chat)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const reviveChatByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
  
    
    const revivedChat = await reviveChatByID(id)
    res.status(200).json(revivedChat)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const chatRoomsHandler:RequestHandler = (req:any,res:any) => {

  let rooms:string[] = ['general', 'tech', 'finance', 'crypto']

  console.log(rooms)

  console.log('Hola desde rooms')

  res.status(200).json({rooms})

}