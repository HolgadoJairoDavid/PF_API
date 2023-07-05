"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentHandlers_1 = require("../handlers/commentHandlers");
const commentRouter = (0, express_1.Router)();
// create Comment
commentRouter.post("/", commentHandlers_1.createCommentHandler);
commentRouter.delete("/:id", commentHandlers_1.deleteCommentHandler);
commentRouter.post("/all", commentHandlers_1.getAllCommentsHandler);
commentRouter.post("/find", commentHandlers_1.findCommentHandler);
exports.default = commentRouter;
