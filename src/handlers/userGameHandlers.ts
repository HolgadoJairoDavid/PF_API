import {RequestHandler} from 'express'
import createUserGame from '../controllers/userGameControllers/createUserGame' 
import deleteUserGame from '../controllers/userGameControllers/deleteUserGame' 
import findUserGame from '../controllers/userGameControllers/findUserGame'
import getAllUserGames from '../controllers/userGameControllers/getAllUserGames' 
import getUserGameByID from '../controllers/userGameControllers/getUserGameById'
import reviveUserGameByID from '../controllers/userGameControllers/reviveUserGameByID' 
import updateUserGame from '../controllers/userGameControllers/updateUserGame' 


export const createUserGameHandler:RequestHandler = async (req, res) => {
    const userGameData = req.body
    try {
        // hacer las comprobaciones aqui
        
        const newUserGame = await createUserGame(userGameData)
        res.status(200).json(newUserGame)
        
    } catch (err: any) {
        res.status(500).json({error: err.message})
    }
}

export const deleteUserGameHandler:RequestHandler = async (req, res) => {
    const {id} = req.params
    try {
        // hacer las comprobaciones aqui
        
        const deletedUserGame = await deleteUserGame(id)
        res.status(200).json(deletedUserGame)
        
    } catch (err: any) {
        res.status(500).json({error: err.message})
    }
}

export const findUserGameHandler:RequestHandler = async (req, res) => {
  const userGameProps = req.body
  try {
    // hacer las comprobaciones aqui
    
    const userGame = await findUserGame(userGameProps)
    res.status(200).json(userGame)

  } catch (err: any) {
    res.status(500).json({error: err.message})
    }
}

export const getAllUserGameHandler:RequestHandler = async (req, res) => {
      try {
    // hacer las comprobaciones aqui
    
    const userGames = await getAllUserGames()
    res.status(200).json(userGames)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const getUserGameByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const userGame = await getUserGameByID(id)
    res.status(200).json(userGame)

  } catch (err: any) {
      res.status(500).json({error: err.message})
    }
}

export const reviveUserGameByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const revivedUserGame = await reviveUserGameByID(id)
    res.status(200).json(revivedUserGame)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const updateUserGameHandler:RequestHandler = async (req, res) => {
  const userGameData = req.body
  try {
    // hacer las comprobaciones aqui
    
    const updatedUserGame = await updateUserGame(userGameData)
    res.status(200).json(updatedUserGame)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}