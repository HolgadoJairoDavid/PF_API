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
exports.codeHandler = exports.thirdSignUpHandler = exports.checkThirdHandler = exports.logOutHandler = exports.thirdSignInHandler = exports.ownSignInHandler = exports.signUpHandler = void 0;
const signUp_1 = __importDefault(require("../controllers/authControllers/signUp"));
const thirdSignIn_1 = __importDefault(require("../controllers/authControllers/thirdSignIn"));
const ownSignIn_1 = __importDefault(require("../controllers/authControllers/ownSignIn"));
const checkThird_1 = __importDefault(require("../controllers/authControllers/checkThird"));
const thirdSignUp_1 = __importDefault(require("../controllers/authControllers/thirdSignUp"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailgen_1 = __importDefault(require("mailgen"));
const signUpHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // a parte de crear debe loguear al usuario
    const userData = req.body;
    try {
        if (!userData) {
            return res.status(400).json({ error: 'Missing email or password' });
        }
        const user = yield (0, signUp_1.default)(userData); // ! /////
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.signUpHandler = signUpHandler;
function ownSignInHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: 'please enter username, password and email' });
            }
            const result = yield (0, ownSignIn_1.default)({ email, password }); // ! /////
            res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    });
}
exports.ownSignInHandler = ownSignInHandler;
function thirdSignInHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userData = req.body;
            const result = yield (0, thirdSignIn_1.default)(userData);
            res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    });
}
exports.thirdSignInHandler = thirdSignInHandler;
// ! Por ahora no hace nada 
const logOutHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // eliminar la autenticación (token)
    try {
        res.status(200).json({ tempMessage: "Por el momento nada" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.logOutHandler = logOutHandler;
const checkThirdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        const result = yield (0, checkThird_1.default)(userData);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.checkThirdHandler = checkThirdHandler;
const thirdSignUpHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        const result = yield (0, thirdSignUp_1.default)(userData);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.thirdSignUpHandler = thirdSignUpHandler;
//Handler para enviar codigo al mail
const codeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        //Configuramos para que pueda recibir emails
        let config = {
            service: "gmail",
            auth: {
                user: "henrymoon.latam@gmail.com",
                pass: "xdgpunccyritkucn",
            },
        };
        let transporter = nodemailer_1.default.createTransport(config);
        let MailGenerator = new mailgen_1.default({
            theme: "default",
            product: {
                name: "Welcome back to HenryMoon!🚀🌕",
                link: "https://mailgen.js/",
            },
        });
        let response = {
            body: {
                name: "Henry mooner 🌚",
                intro: `Please enter the following code in the page so you can set a new password: `,
                table: {
                    data: [
                        {
                            Code: `${userData.code}`,
                        },
                    ],
                },
                outro: "If the code does not work, please try again with another request.",
            },
        };
        let mail = MailGenerator.generate(response);
        let message = {
            from: "henrymoon.latam@gmail.com",
            to: userData.email,
            subject: "Reset password",
            html: mail,
        };
        yield transporter.sendMail(message);
        res.status(200).json({ success: true });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.codeHandler = codeHandler;
