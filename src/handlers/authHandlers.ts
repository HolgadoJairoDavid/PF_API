import {RequestHandler, Request, Response} from 'express'
import signUp from '../controllers/authControllers/signUp'
import thirdSignIn from '../controllers/authControllers/thirdSignIn'
import ownSignIn from '../controllers/authControllers/ownSignIn'
import checkThird from '../controllers/authControllers/checkThird'
import thirdSignUp from '../controllers/authControllers/thirdSignUp'

export const signUpHandler:RequestHandler = async (req, res) => {
  // a parte de crear debe loguear al usuario
  const userData = req.body

  try {
    if(!userData){
      return res.status(400).json({error: 'Missing email or password'})
    }
    
    const user = await signUp(userData) // ! /////

    res.status(200).json(user)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export async function  ownSignInHandler (req: Request, res: Response) {
  try {
    const {email, password} = req.body
    if(!email || !password){
      return res.status(400).json({error: 'please enter username, password and email'})
    }
  
    const result:any = await ownSignIn({email, password}) // ! /////
    
    console.log(result.user.newMessages)


    res.status(200).json(result)
  
} catch (error:any) {
    return res.status(500).json({error: error.message})
}
}


export async function thirdSignInHandler(req: Request, res: Response){
  try {
    const userData = req.body
  
    const result = await thirdSignIn(userData)
  
    res.status(200).json(result) 
  } catch (error: any) {
    return res.status(500).json({error: error.message})
  }
}



// ! Por ahora no hace nada 

export const logOutHandler:RequestHandler = async (req, res) => {
  // eliminar la autenticación (token)
  try {
    res.status(200).json({tempMessage:"Por el momento nada"})

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}


export const checkThirdHandler:RequestHandler = async (req, res) => {
  const userData = req.body
  try {
    const result = await checkThird(userData)
    res.status(200).json(result)
  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const thirdSignUpHandler:RequestHandler = async (req, res) => {
  const userData = req.body
  try {
    const result = await thirdSignUp(userData)
    res.status(200).json(result)
  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}