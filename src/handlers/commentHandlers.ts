import {RequestHandler} from 'express'
import createComment from '../controllers/commentControllers/createComment'
import getAllComments from '../controllers/commentControllers/getAllComments' 
// import updateComment from '../controllers/CommentControllers/updateComment' 
import deleteComment from '../controllers/commentControllers/deleteComment' 
 import findComment from '../controllers/commentControllers/findComment' 
// import getCommentByID from '../controllers/CommentControllers/getCommentByID' 
// import reviveCommentByID from '../controllers/CommentControllers/reviveCommentByID' 

export const createCommentHandler:RequestHandler = async (req, res) => {
  const CommentData = req.body
  try {
  
    const newComment = await createComment(CommentData)
    res.status(200).json(newComment)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const getAllCommentsHandler:RequestHandler = async (req, res) => {
  const Game:any = req.body
  try {
  
    
    const Comments = await getAllComments(Game)
   return res.status(200).json(Comments)

  } catch (err: any) {
   return res.status(500).json({error: err.message})
  }
}

// export const updateCommentHandler:RequestHandler = async (req, res) => {
//   const CommentData = req.body
//   try {
  
    
//     const updatedComment = await updateComment(CommentData)
//     res.status(200).json(updatedComment)
    
//   } catch (err: any) {
//     res.status(500).json({error: err.message})
//   }
// }

export const deleteCommentHandler:RequestHandler = async (req, res) => {
  const {id} = req.params
  try {
  
    
    const deletedComment = await deleteComment(id)
    res.status(200).json(deletedComment)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

export const findCommentHandler:RequestHandler = async (req, res) => {
  const CommentProps = req.body
  try {
  
    
    const Comment = await findComment(CommentProps)
    res.status(200).json(Comment)

  } catch (err: any) {
    res.status(500).json({error: err.message})
  }
}

// export const getCommentByIDHandler:RequestHandler = async (req, res) => {
//     const {id} = req.params
//     try {
      
    
//         const Comment = await getCommentByID(id)
//     res.status(200).json(Comment)

//   } catch (err: any) {
//     res.status(500).json({error: err.message})
//   }
// }

// export const reviveCommentByIDHandler:RequestHandler = async (req, res) => {
//   const {id} = req.params
//   try {
  
    
//     const revivedComment = await reviveCommentByID(id)
//     res.status(200).json(revivedComment)

//   } catch (err: any) {
//     res.status(500).json({error: err.message})
//   }
// }