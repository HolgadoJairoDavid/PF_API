import { Router } from "express";
import {
  createCommentHandler,
  getAllCommentsHandler,
  deleteCommentHandler,
  //   updateCommentHandler,
  //   deleteCommentHandler,
  findCommentHandler,
  //   getCommentByIDHandler,
  //   reviveCommentByIDHandler
} from "../handlers/commentHandlers";

const commentRouter = Router();

// create Comment

commentRouter.post("/", createCommentHandler);
commentRouter.delete("/:id", deleteCommentHandler);
commentRouter.post("/all", getAllCommentsHandler);
commentRouter.post("/find", findCommentHandler);

export default commentRouter;
