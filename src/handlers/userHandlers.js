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
exports.changePasswordHandler = exports.searchUsersHandler = exports.findUsersGroupByEmailHandler = exports.findUserHandler = exports.existsUserEmailHandler = exports.getAllUsersHandler = exports.getUserByIDHandler = exports.unBanUserHandler = exports.reviveUserByIDHandler = exports.banUserHandler = exports.deleteUserHandler = exports.updateUserHandler = void 0;
const updateUser_1 = __importDefault(require("../controllers/userControllers/updateUser"));
const deleteUser_1 = __importDefault(require("../controllers/userControllers/deleteUser"));
const getUserByID_1 = __importDefault(require("../controllers/userControllers/getUserByID"));
const findUser_1 = __importDefault(require("../controllers/userControllers/findUser"));
const getAllUsers_1 = __importDefault(require("../controllers/userControllers/getAllUsers"));
const existsUserEmail_1 = __importDefault(require("../controllers/userControllers/existsUserEmail"));
const reviveUserByID_1 = __importDefault(require("../controllers/userControllers/reviveUserByID"));
const findUsersGroupByEmail_1 = __importDefault(require("../controllers/userControllers/findUsersGroupByEmail"));
const searchUsers_1 = __importDefault(require("../controllers/userControllers/searchUsers"));
const banUser_1 = __importDefault(require("../controllers/userControllers/banUser"));
const unBanUser_1 = __importDefault(require("../controllers/userControllers/unBanUser"));
const changePassword_1 = __importDefault(require("../controllers/userControllers/changePassword"));
const updateUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const newUser = yield (0, updateUser_1.default)(id, userData);
        res.status(200).json(newUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateUserHandler = updateUserHandler;
const deleteUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aquí
        if (!id)
            throw new Error('Id is null');
        const deletedUser = yield (0, deleteUser_1.default)(id);
        res.status(200).json(deletedUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteUserHandler = deleteUserHandler;
// Handler para bannear usuario
const banUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aquí
        if (!id)
            throw new Error('Id is null');
        const bannedUser = yield (0, banUser_1.default)(id);
        res.status(200).json(bannedUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.banUserHandler = banUserHandler;
const reviveUserByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aquí
        if (!id)
            throw new Error('Id is null');
        const newUser = yield (0, reviveUserByID_1.default)(id);
        res.status(200).json(newUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.reviveUserByIDHandler = reviveUserByIDHandler;
// LO USAREMOS PARA DESVANEAR 
const unBanUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aquí
        if (!id)
            throw new Error('Id is null');
        const newUser = yield (0, unBanUser_1.default)(id);
        res.status(200).json(newUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.unBanUserHandler = unBanUserHandler;
const getUserByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const user = yield (0, getUserByID_1.default)(id);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getUserByIDHandler = getUserByIDHandler;
const getAllUsersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // hacer las comprobaciones aqui
        const users = yield (0, getAllUsers_1.default)();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllUsersHandler = getAllUsersHandler;
const existsUserEmailHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        // hacer las comprobaciones aqui
        const result = yield (0, existsUserEmail_1.default)(email);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.existsUserEmailHandler = existsUserEmailHandler;
// busca según un criterio
const findUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userProps = req.body;
    try {
        // hacer las comprobaciones aqui
        const user = yield (0, findUser_1.default)(userProps);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.findUserHandler = findUserHandler;
// lo usa el jeugo de slimes
const findUsersGroupByEmailHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        if (!email)
            return res.status(400).json({ message: "No proporcionaste email" });
        const usersGroup = yield (0, findUsersGroupByEmail_1.default)(email.toString());
        res.status(200).json(usersGroup);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.findUsersGroupByEmailHandler = findUsersGroupByEmailHandler;
// Busca por coincidencias en email
const searchUsersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        if (!email)
            return res.status(400).json({ message: "The email is undefined" });
        const usersGroup = yield (0, searchUsers_1.default)(email.toString());
        res.status(200).json(usersGroup);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.searchUsersHandler = searchUsersHandler;
//cambiar contraseña
const changePasswordHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body; //mail, pass
    try {
        const newPass = yield (0, changePassword_1.default)(email, password);
        res.status(200).json(newPass);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.changePasswordHandler = changePasswordHandler;
