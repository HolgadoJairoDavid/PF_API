import { Router } from "express";
import {
    createChatHandler,
    deleteChatHandler,
    findChatHandler,
    getAllChatsHandler,
    getChatByIDHandler,
    reviveChatByIDHandler,
    updateChatHandler,
    chatRoomsHandler
} from "../handlers/chatHandlers";

const chatRouter = Router();

// create Chat

/* chatRouter.post("/", createChatHandler);

chatRouter.get("/all", getAllChatsHandler);

chatRouter.put("/update", updateChatHandler);

chatRouter.delete("/:id", deleteChatHandler);

chatRouter.get("/find", findChatHandler);

chatRouter.get("/:id", getChatByIDHandler);

chatRouter.post("/revive/:id", reviveChatByIDHandler); */

chatRouter.get("/rooms", chatRoomsHandler);

export default chatRouter;