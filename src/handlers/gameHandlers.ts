import {RequestHandler} from 'express'
import createGame from '../controllers/gameControllers/createGame' 
import getAllGames from '../controllers/gameControllers/getAllGames' 
import updateGame from '../controllers/gameControllers/updateGame' 
import deleteGame from '../controllers/gameControllers/deleteGame' 
import findGame from '../controllers/gameControllers/findGame' 
import getGameByID from '../controllers/gameControllers/getGameByID' 
import reviveGameByID from '../controllers/gameControllers/reviveGameByID' 

export const createGameHandler:RequestHandler = async (req, res) => {
  const gameData = req.body
  try {
  
    
    const newGame = await createGame(gameData)
    res.status(200).json(newGame)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const getAllGamesHandler:RequestHandler = async (req, res) => {
  try {
  
    
    const games = await getAllGames()
    res.status(200).json(games)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const updateGameHandler:RequestHandler = async (req, res) => {
  const gameData = req.body
  try {
  
    
    const updatedGame = await updateGame(gameData)
    res.status(200).json(updatedGame)
    
  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const deleteGameHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
  
    
    const deletedGame = await deleteGame(id)
    res.status(200).json(deletedGame)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const findGameHandler:RequestHandler = async (req, res) => {
  const gameProps = req.body
  try {
  
    
    const game = await findGame(gameProps)
    res.status(200).json(game)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const getGameByIDHandler:RequestHandler = async (req, res) => {
    const {id} = req.params
    try {
      
    
        const game = await getGameByID(id)
    res.status(200).json(game)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const reviveGameByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
  
    
    const revivedGame = await reviveGameByID(id)
    res.status(200).json(revivedGame)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}




