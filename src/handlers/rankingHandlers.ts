import {RequestHandler} from 'express'
import createRanking from '../controllers/rankingControllers/createRanking' 
import getAllRankings from '../controllers/rankingControllers/getAllRankings' 
import getRankingByID from '../controllers/rankingControllers/getRankingById'
import updateRanking from '../controllers/rankingControllers/updateRanking' 
import deleteRanking from '../controllers/rankingControllers/deleteRanking' 
import reviveRankingByID from '../controllers/rankingControllers/reviveRankingByID' 
import findRanking from '../controllers/rankingControllers/findRanking' 
import getGeneralRanking from '../controllers/rankingControllers/getGeneralRanking'
import getCohortRanking from '../controllers/rankingControllers/getCohortRanking'
import getGroupRanking from '../controllers/rankingControllers/getGroupRanking'
import getRankingInGamesByUser from '../controllers/rankingControllers/getRankingInGamesByUser'
import createManyRankings from '../controllers/rankingControllers/createManyRankings'
import getTotalRankingOfUser from '../controllers/rankingControllers/getTotalRankingOfUser'
import createCountRanking from '../controllers/rankingControllers/createCountRanking'
import getRankingOfGame from '../controllers/rankingControllers/getRankingOfGame'


export const createRankingHandler:RequestHandler = async (req, res) => {
  const rankingData = req.body
  try {
    // hacer las comprobaciones aqui
    
    const newRanking = await createRanking(rankingData)
    res.status(200).json(newRanking)
    
  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getAllRankingHandler:RequestHandler = async (req, res) => {
  try {
    // hacer las comprobaciones aqui
    
    const rankings = await getAllRankings()
    res.status(200).json(rankings)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getRankingByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const ranking = await getRankingByID(id)
    res.status(200).json(ranking)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const updateRankingHandler:RequestHandler = async (req, res) => {
  const rankingData = req.body
  try {
    // hacer las comprobaciones aqui
    
    const updatedRanking = await updateRanking(rankingData)
    res.status(200).json(updatedRanking)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const deleteRankingHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const deletedRanking = await deleteRanking(id)
    res.status(200).json(deletedRanking)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const reviveRankingByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const revivedRanking = await reviveRankingByID(id)
    res.status(200).json(revivedRanking)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const findRankingHandler:RequestHandler = async (req, res) => {
  const rankingProps = req.body
  try {
    // hacer las comprobaciones aqui
    
    const ranking = await findRanking(rankingProps)
    res.status(200).json(ranking)

  } catch (err: any) {
    res.status(500).json({error: err.message})
}
}


export const getGeneralRankingHandler:RequestHandler = async (req, res) => {
  try {
    const ranking = await getGeneralRanking()
    res.status(200).json(ranking)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getCohortRankingHandler:RequestHandler = async (req, res) => {
  const {cohort}= req.params

  try {
    const ranking = await getCohortRanking(cohort)
    res.status(200).json(ranking)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getGroupRankingHandler:RequestHandler = async (req, res) => {
  const {cohort, group}= req.query

  try {
    const ranking = await getGroupRanking(cohort, group)
    res.status(200).json(ranking)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getRankingInGamesByUserHandler:RequestHandler = async (req, res) => {
  const {userID}= req.params

  try {
    const ranking = await getRankingInGamesByUser(userID)
    res.status(200).json(ranking)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const createManyRankingsHandler:RequestHandler = async (req, res) => {
  const manyRankings = req.body

  try {
    const rankings = await createManyRankings(manyRankings)
    res.status(200).json(rankings)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getTotalRankingOfUserHandler:RequestHandler = async (req, res) => {
  const {userID} = req.params

  try {
    const totalRanking = await getTotalRankingOfUser(userID)
    res.status(200).json(totalRanking)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const createCountRankingHandler:RequestHandler = async (req, res) => { // ! /////////
  const rankingData = req.body

  try {
    const totalRanking = await createCountRanking(rankingData)
    res.status(200).json(totalRanking)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const getRankingOfGameHandler:RequestHandler = async (req, res) => {
  const {gameID}= req.params

  try {
    const rankings = await getRankingOfGame(gameID)
    res.status(200).json(rankings)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}