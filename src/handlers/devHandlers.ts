import {RequestHandler} from 'express'
import postDev from '../controllers/devControllers/postDev' 
import getDev from '../controllers/devControllers/getDev' 
import getProtectDev from '../controllers/devControllers/getProtectDev' 
import updateMany from '../controllers/devControllers/updateMany'

export const postDevHandler:RequestHandler = async (req, res) => {
  const devData = req.body
  try {
    // hacer las comprobaciones aqui
    
    const newGroup = await postDev(devData)
    res.status(200).json(newGroup)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getDevHandler:RequestHandler = async (req, res) => {
  try {
    const result = await getDev()
    res.status(200).json(result)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

// ruta protegida
export const getProtectDevHandler:RequestHandler = async (req, res) => {
  try {
    const result = await getProtectDev()
    res.status(200).json(result)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const updateManyHandler:RequestHandler = async (req, res) => {
  try {
    const result = await updateMany()
    res.status(200).json(result)
  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}