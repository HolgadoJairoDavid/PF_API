import {RequestHandler, Request, Response} from 'express'
import signUp from '../controllers/authControllers/signUp'
import thirdSignIn from '../controllers/authControllers/thirdSignIn'
import ownSignIn from '../controllers/authControllers/ownSignIn'
import checkThird from '../controllers/authControllers/checkThird'
import thirdSignUp from '../controllers/authControllers/thirdSignUp'
import nodemailer from "nodemailer";
import Mailgen from "mailgen";

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
//Handler para enviar codigo al mail
export const codeHandler:RequestHandler = async (req,res)=>{
  const userData = req.body
  try{
    //Configuramos para que pueda recibir emails
  let config = {
    service: "gmail",
    auth: {
      user: "henrymoon.latam@gmail.com",
      pass: "xdgpunccyritkucn",
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Welcome back to HenryMoon!🚀🌕",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name: "Henry mooner 🌚",
      intro:
        `Please enter the following code in the page so you can set a new password: `,
        table: {
          data: [
            {
              Code:
              `${userData.code}`,
            },
          ],
        },
      outro: "If the code does not work, please try again with another request.",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: "henrymoon.latam@gmail.com",
    to: userData.email,
    subject: "Reset password",
    html: mail,
  };

  await transporter.sendMail(message);
  res.status(200).json({success: true})
  } catch(err:any){
    res.status(500).json({error: err.message})
  }

} 