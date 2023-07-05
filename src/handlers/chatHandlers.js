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
exports.chatRoomsHandler = exports.reviveChatByIDHandler = exports.getChatByIDHandler = exports.findChatHandler = exports.deleteChatHandler = exports.updateChatHandler = exports.getAllChatsHandler = exports.createChatHandler = void 0;
const createChat_1 = __importDefault(require("../controllers/chatControllers/createChat"));
const getAllChats_1 = __importDefault(require("../controllers/chatControllers/getAllChats"));
const updateChat_1 = __importDefault(require("../controllers/chatControllers/updateChat"));
const deleteChat_1 = __importDefault(require("../controllers/chatControllers/deleteChat"));
const findChat_1 = __importDefault(require("../controllers/chatControllers/findChat"));
const getChatByID_1 = __importDefault(require("../controllers/chatControllers/getChatByID"));
const reviveChatByID_1 = __importDefault(require("../controllers/chatControllers/reviveChatByID"));
const createChatHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ChatData = req.body;
    try {
        const newChat = yield (0, createChat_1.default)(ChatData);
        res.status(200).json(newChat);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createChatHandler = createChatHandler;
const getAllChatsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Chats = yield (0, getAllChats_1.default)();
        res.status(200).json(Chats);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllChatsHandler = getAllChatsHandler;
const updateChatHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ChatData = req.body;
    try {
        const updatedChat = yield (0, updateChat_1.default)(ChatData);
        res.status(200).json(updatedChat);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateChatHandler = updateChatHandler;
const deleteChatHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedChat = yield (0, deleteChat_1.default)(id);
        res.status(200).json(deletedChat);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteChatHandler = deleteChatHandler;
const findChatHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ChatProps = req.body;
    try {
        const Chat = yield (0, findChat_1.default)(ChatProps);
        res.status(200).json(Chat);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.findChatHandler = findChatHandler;
const getChatByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const Chat = yield (0, getChatByID_1.default)(id);
        res.status(200).json(Chat);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getChatByIDHandler = getChatByIDHandler;
const reviveChatByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const revivedChat = yield (0, reviveChatByID_1.default)(id);
        res.status(200).json(revivedChat);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.reviveChatByIDHandler = reviveChatByIDHandler;
const chatRoomsHandler = (req, res) => {
    let rooms = ['general', 'Q&A', 'Pair Rev', 'FeedBack'];
    res.status(200).json({ rooms });
};
exports.chatRoomsHandler = chatRoomsHandler;
