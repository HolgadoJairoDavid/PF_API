import {RequestHandler} from 'express'
import createGroup from '../controllers/groupControllers/createGroup' 
import getGroupByID from '../controllers/groupControllers/getGroupByID' 
import updateGroup from '../controllers/groupControllers/updateGroup' 
import deleteGroup from '../controllers/groupControllers/deleteGroup' 
import getAllGroups from '../controllers/groupControllers/getAllGroups' 
import reviveGroupByID from '../controllers/groupControllers/reviveGroupByID' 
import findGroup from '../controllers/groupControllers/findGroup' 

export const createGroupHandler:RequestHandler = async (req, res) => {
  const groupData = req.body
  try {
    // hacer las comprobaciones aqui
    
    const newGroup = await createGroup(groupData)
    res.status(200).json(newGroup)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getGroupByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const group = await getGroupByID(id)
    res.status(200).json(group)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const updateGroupHandler:RequestHandler = async (req, res) => {
  const groupData = req.body
  try {
    // hacer las comprobaciones aqui
    
    const updatedGroup = await updateGroup(groupData)
    res.status(200).json(updatedGroup)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const deleteGroupHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const deletedGroup = await deleteGroup(id)
    res.status(200).json(deletedGroup)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const reviveGroupByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const revivedGroup = await reviveGroupByID(id)
    res.status(200).json(revivedGroup)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getAllGroupsHandler:RequestHandler = async (req, res) => {

  const { cohort }: any = req.query

  try {
    // hacer las comprobaciones aqui
    
    const groups = await getAllGroups(cohort)
    res.status(200).json(groups)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

// busca según un criterio
export const findGroupHandler:RequestHandler = async (req, res) => {
  const groupProps = req.body
  try {
    // hacer las comprobaciones aqui
    
    const group = await findGroup(groupProps)
    res.status(200).json(group)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}