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
const User_1 = __importDefault(require("../../models/User"));
const helpers_1 = require("../../helpers");
const Group_1 = __importDefault(require("../../models/Group"));
const thirdSignIn = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    // crear al usuario y loguearlo
    // si ya está creado agregar el nuevo (si lo es) método de logueo a authMethod
    // formatear data
    userData.authMethod = {
        type: userData.type,
        token: userData.token,
    };
    // FALTA deberiamos buscar si existe, no permitir que cree con un email que ya existe
    // si existe añadir el nuevo método de autenticacion o cambiar el ya guardado, sin bor
    // CREAR
    let user = yield User_1.default.create(userData);
    const group = yield Group_1.default.find({
        $and: [
            { groupNumber: user.group },
            { cohort: user.cohort }
        ]
    });
    user.status = 'online';
    yield user.save();
    return { access: true, token: (0, helpers_1.createToken)({ id: user._id, email: user.name }), user: Object.assign(Object.assign({}, user._doc), { groupDetail: group }) };
});
exports.default = thirdSignIn;
