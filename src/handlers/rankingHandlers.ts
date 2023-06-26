import {RequestHandler} from 'express'
import createRanking from '../controllers/rankingControllers/createRanking' 
import getAllRankings from '../controllers/rankingControllers/getAllRankings' 
import getRankingByID from '../controllers/rankingControllers/getRankingById'
import updateRanking from '../controllers/rankingControllers/updateRanking' 
import deleteRanking from '../controllers/rankingControllers/deleteRanking' 
import reviveRankingByID from '../controllers/rankingControllers/reviveRankingByID' 
import findRanking from '../controllers/rankingControllers/findRanking' 


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