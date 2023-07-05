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
// encuentra los usuarios que no fueron borrado según un grupo
// y solo devuelve algunas propiedades
// retorna una lista de usuarios
const User_1 = __importDefault(require("../../models/User"));
const findUsersByGroup = (group) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.find({ group, isDeleted: false });
    return users.map((user) => {
        return {
            _id: user._id.toString(),
            name: user.name,
            email: user.email,
            group: user.group,
            isConnected: false,
            socketID: ''
        };
    });
});
exports.default = findUsersByGroup;
