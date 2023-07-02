import {RequestHandler} from 'express'
import updateUser from '../controllers/userControllers/updateUser' 
import deleteUser from '../controllers/userControllers/deleteUser' 
import getUserByID from '../controllers/userControllers/getUserByID' 
import findUser from '../controllers/userControllers/findUser' 
import getAllUsers from '../controllers/userControllers/getAllUsers' 
import existsUserEmail from '../controllers/userControllers/existsUserEmail' 
import reviveUserByID from '../controllers/userControllers/reviveUserByID' 
import findUsersGroupByEmail from '../controllers/userControllers/findUsersGroupByEmail' 
import searchUsers from '../controllers/userControllers/searchUsers' 
import banUser from '../controllers/userControllers/banUser'
import unBanUser from '../controllers/userControllers/unBanUser'
import changePassword from '../controllers/userControllers/changePassword'

export const updateUserHandler:RequestHandler = async (req, res) => {
  const userData = req.body
  const { id } = req.params
  try {
    // hacer las comprobaciones aqui
    
    const newUser = await updateUser(id, userData)
    res.status(200).json(newUser)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const deleteUserHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aquí
    if(!id) throw new Error('Id is null')

    const deletedUser = await deleteUser(id)
    res.status(200).json(deletedUser)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

// Handler para bannear usuario

export const banUserHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aquí
    if(!id) throw new Error('Id is null')

    const bannedUser = await banUser(id)
    res.status(200).json(bannedUser)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const reviveUserByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aquí
    if(!id) throw new Error('Id is null')

    const newUser = await reviveUserByID(id)
    res.status(200).json(newUser)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

// LO USAREMOS PARA DESVANEAR 
export const unBanUserHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aquí
    if(!id) throw new Error('Id is null')

    const newUser = await unBanUser(id)
    res.status(200).json(newUser)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const getUserByIDHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
    // hacer las comprobaciones aqui
    
    const user = await getUserByID(id)
    res.status(200).json(user)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const getAllUsersHandler:RequestHandler = async (req, res) => {
  
  try {
    // hacer las comprobaciones aqui
    
    const users = await getAllUsers()
    res.status(200).json(users)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const existsUserEmailHandler:RequestHandler = async (req, res) => {
  const {email} = req.query
  try {
    // hacer las comprobaciones aqui
    
    const result = await existsUserEmail(email)
    res.status(200).json(result)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}




// busca según un criterio
export const findUserHandler:RequestHandler = async (req, res) => {
  const userProps = req.body
  try {
    // hacer las comprobaciones aqui
    
    const user = await findUser(userProps)
    res.status(200).json(user)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


// lo usa el jeugo de slimes
export const findUsersGroupByEmailHandler:RequestHandler = async (req, res) => {
  const {email} = req.query
  try {
    if(!email) return res.status(400).json({message: "No proporcionaste email"})

    const usersGroup = await findUsersGroupByEmail(email.toString())
    res.status(200).json(usersGroup)
  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

// Busca por coincidencias en email
export const searchUsersHandler:RequestHandler = async (req, res) => {
  const {email} = req.query
  try {
    if(!email) return res.status(400).json({message: "The email is undefined"})

    const usersGroup = await searchUsers(email.toString())
    res.status(200).json(usersGroup)
  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

//cambiar contraseña
export const changePasswordHandler:RequestHandler = async (req,res)=>{
  const {email, password} = req.body //mail, pass
  try {
    const newPass = await changePassword(email,password) 
    res.status(200).json(newPass)
  
  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

