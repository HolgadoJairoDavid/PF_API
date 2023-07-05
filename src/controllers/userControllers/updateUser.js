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
const validations_1 = require("../../helpers/validations");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Group_1 = __importDefault(require("../../models/Group"));
const User_1 = __importDefault(require("../../models/User"));
const updateUser = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (userData.cohort) {
        if (!(0, validations_1.isCohortValid)(userData.cohort))
            throw new Error("Cohort Name not allowed. Cannot update the document.");
    }
    if (userData.password) {
        userData.password = yield bcrypt_1.default.hash(userData.password, 10); //$2b$10$ZgjhmJXXRzXM6P.vvCiaUuBOyIbAt5dg.l93OEMCdgu21weCDPZU6
    }
    const updatedUser = yield User_1.default.findByIdAndUpdate(id, userData, {
        new: true,
    });
    const group = yield Group_1.default.find({
        $and: [{ groupNumber: updatedUser.group }, { cohort: updatedUser.cohort }],
    });
    return Object.assign(Object.assign({}, updatedUser._doc), { groupDetail: group });
});
exports.default = updateUser;
