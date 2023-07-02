import {RequestHandler} from 'express'
import createCohort from '../controllers/cohortControllers/createCohort' 
import getCohortByID from '../controllers/cohortControllers/getCohortByID' 
import updateCohort from '../controllers/cohortControllers/updateCohort' 
import deleteCohort from '../controllers/cohortControllers/deleteCohort' 
import getAllCohorts from '../controllers/cohortControllers/getAllCohorts' 
import reviveCohortByID from '../controllers/cohortControllers/reviveCohortByID' 
import findCohort from '../controllers/cohortControllers/findCohort' 

export const createCohortHandler:RequestHandler = async (req, res) => {
  const cohortData = req.body
  try {
    // hacer las comprobaciones aqui
    
    const newCohort = await createCohort(cohortData)
    res.status(200).json(newCohort)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getCohortByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const cohort = await getCohortByID(id)
    res.status(200).json(cohort)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const updateCohortHandler:RequestHandler = async (req, res) => {
  const cohortData = req.body
  try {
    // hacer las comprobaciones aqui
    
    const updatedCohort = await updateCohort(cohortData)
    res.status(200).json(updatedCohort)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const deleteCohortHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const deletedCohort = await deleteCohort(id)
    res.status(200).json(deletedCohort)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const reviveCohortByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const revivedCohort = await reviveCohortByID(id)
    res.status(200).json(revivedCohort)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getAllCohortsHandler:RequestHandler = async (req, res) => {
  
  try {
    // hacer las comprobaciones aqui
    
    const cohorts = await getAllCohorts()
    res.status(200).json(cohorts)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const findCohortHandler:RequestHandler = async (req, res) => {
  const cohortProps = req.body
  try {
    // hacer las comprobaciones aqui
    
    const cohort = await findCohort(cohortProps)
    res.status(200).json(cohort)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}