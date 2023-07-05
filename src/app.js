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
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
const routes_1 = __importDefault(require("./routes"));
const Message_1 = __importDefault(require("./models/Message"));
const User_1 = __importDefault(require("./models/User"));
// initializations
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*'
    }
});
// middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
app.use('/', routes_1.default);
let users = [];
// ! ////////
const getLastMessagesFromRoom = (room) => __awaiter(void 0, void 0, void 0, function* () {
    let roomMessages = yield Message_1.default.aggregate([
        { $match: { to: room } },
        { $group: { _id: '$date', messagesByDate: { $push: '$$ROOT' } } }
    ]);
    return roomMessages;
});
const sortRoomMessagesByDate = (messages) => {
    return messages.sort(function (a, b) {
        let date1 = a._id.split('/');
        let date2 = b._id.split('/');
        date1 = date1[2] + date1[0] + date1[1];
        date2 = date2[2] + date2[0] + date2[1];
        return date1 < date2 ? -1 : 1;
    });
};
// ! ////////
io.on('connection', (socket) => {
    socket.on("userData", (userId) => __awaiter(void 0, void 0, void 0, function* () {
        if (!userId)
            return;
        const match = users.find(user => user._id === userId);
        if (match) {
            match.socketId = socket.id;
            const user = yield User_1.default.findById(match === null || match === void 0 ? void 0 : match._id);
            user.status = 'online';
            yield user.save();
            const members = yield User_1.default.find();
            socket.broadcast.emit('new-user', members);
        }
        else {
            users.push({ _id: userId, socketId: socket.id });
        }
    }));
    socket.on('disconnect', () => __awaiter(void 0, void 0, void 0, function* () {
        const match = users.find(user => user.socketId === socket.id);
        try {
            const user = yield User_1.default.findById(match === null || match === void 0 ? void 0 : match._id);
            if (!user) {
                return;
            }
            user.status = 'offline';
            yield user.save();
            const members = yield User_1.default.find();
            socket.broadcast.emit('new-user', members);
            users = users.filter(user => user.socketId !== socket.id);
        }
        catch (error) {
            console.log(error);
        }
    }));
    // ! ////////
    socket.on('new-user', () => __awaiter(void 0, void 0, void 0, function* () {
        const members = yield User_1.default.find();
        io.emit('new-user', members);
    }));
    socket.on('join-room', (room) => __awaiter(void 0, void 0, void 0, function* () {
        socket.join(room);
        let roomMessages = yield getLastMessagesFromRoom(room);
        roomMessages = sortRoomMessagesByDate(roomMessages);
        // socket.emit('room-messages', roomMessages)
        socket.emit('room-messages', { room, messages: roomMessages });
    }));
    socket.on('message-room', (room, content, sender, time, date) => __awaiter(void 0, void 0, void 0, function* () {
        const newMessage = yield Message_1.default.create({
            content,
            from: sender,
            time,
            date,
            to: room
        });
        let roomMessages = yield getLastMessagesFromRoom(room);
        roomMessages = sortRoomMessagesByDate(roomMessages);
        // io.to(room).emit('room-messages', roomMessages)
        io.to(room).emit('room-messages', { room, messages: roomMessages });
        socket.broadcast.emit('notifications', room);
    }));
    app.post('/logout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { _id, newMessages } = req.body;
            const user = yield User_1.default.findById(_id);
            user.status = 'offline';
            user.newMessages = newMessages;
            yield user.save();
            const members = yield User_1.default.find();
            socket.broadcast.emit('new-user', members);
            res.status(200).send();
        }
        catch (error) {
            res.status(400).send();
        }
    }));
    // ! ////////
});
//export default app
exports.default = httpServer;
