"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCommentHandler = exports.deleteCommentHandler = exports.getAllCommentsHandler = exports.createCommentHandler = void 0;
const createComment_1 = __importDefault(require("../controllers/commentControllers/createComment"));
const getAllComments_1 = __importDefault(require("../controllers/commentControllers/getAllComments"));
// import updateComment from '../controllers/CommentControllers/updateComment' 
const deleteComment_1 = __importDefault(require("../controllers/commentControllers/deleteComment"));
const findComment_1 = __importDefault(require("../controllers/commentControllers/findComment"));
// import getCommentByID from '../controllers/CommentControllers/getCommentByID' 
// import reviveCommentByID from '../controllers/CommentControllers/reviveCommentByID' 
const createCommentHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CommentData = req.body;
    try {
        const newComment = yield (0, createComment_1.default)(CommentData);
        res.status(200).json(newComment);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createCommentHandler = createCommentHandler;
const getAllCommentsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Game = req.body;
    try {
        const Comments = yield (0, getAllComments_1.default)(Game);
        return res.status(200).json(Comments);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.getAllCommentsHandler = getAllCommentsHandler;
// export const updateCommentHandler:RequestHandler = async (req, res) => {
//   const CommentData = req.body
//   try {
//     const updatedComment = await updateComment(CommentData)
//     res.status(200).json(updatedComment)
//   } catch (err: any) {
//     res.status(500).json({error: err.message})
//   }
// }
const deleteCommentHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedComment = yield (0, deleteComment_1.default)(id);
        res.status(200).json(deletedComment);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteCommentHandler = deleteCommentHandler;
const findCommentHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CommentProps = req.body;
    try {
        const Comment = yield (0, findComment_1.default)(CommentProps);
        res.status(200).json(Comment);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.findCommentHandler = findCommentHandler;
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
