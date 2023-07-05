"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatHandlers_1 = require("../handlers/chatHandlers");
const chatRouter = (0, express_1.Router)();
// create Chat
/* chatRouter.post("/", createChatHandler);

chatRouter.get("/all", getAllChatsHandler);

chatRouter.put("/update", updateChatHandler);

chatRouter.delete("/:id", deleteChatHandler);

chatRouter.get("/find", findChatHandler);

chatRouter.get("/:id", getChatByIDHandler);

chatRouter.post("/revive/:id", reviveChatByIDHandler); */
chatRouter.get("/rooms", chatHandlers_1.chatRoomsHandler);
exports.default = chatRouter;
