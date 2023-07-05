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
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../helpers");
const authUtils_1 = require("./authUtils");
const checkThird = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = userData;
    const accessResult = yield (0, authUtils_1.userHaveAccess)(email);
    // Si no tiene acceso pero el usuario puede existir o no
    if (!accessResult.access)
        return accessResult;
    if (!accessResult.user)
        return accessResult; // comprobaccion extra para que no se queje typescript
    // El usuario existe y tiene acceso (no esta eliminado/baneado)
    const { user, group } = accessResult;
    return { access: true, token: (0, helpers_1.createToken)({ id: user._id, email: user.name }), user: Object.assign(Object.assign({}, user._doc), { groupDetail: group }) };
});
exports.default = checkThird;
