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
exports.validateUser = exports.userHaveAccess = void 0;
const User_1 = __importDefault(require("../../../models/User"));
const Group_1 = __importDefault(require("../../../models/Group"));
function userHaveAccess(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.default.findOne({ email });
        // El usuario no existe
        if (!user)
            return { access: false, user: null };
        // El usuario existe pero está eliminado/baneado
        if (user.isDeleted)
            return { access: false, user };
        // Indicamos online
        user.status = 'online';
        yield user.save();
        // Encontramos el grupo al que pertenece
        const group = yield Group_1.default.find({
            $and: [
                { groupNumber: user.group },
                { cohort: user.cohort }
            ]
        });
        // el usuario existe y no esta eliminado/baneado
        return {
            access: true,
            user,
            group
        };
    });
}
exports.userHaveAccess = userHaveAccess;
// valida usuario y lanza un un error si no cumple
function validateUser(userData) {
    console.log(userData);
    if (!userData.name)
        throw new Error("The name is undefined");
    if (!userData.cohort)
        throw new Error("The cohort is undefined");
    if (!userData.group)
        throw new Error("The group is undefined");
}
exports.validateUser = validateUser;
