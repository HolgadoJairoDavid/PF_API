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
require("dotenv/config");
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailgen_1 = __importDefault(require("mailgen"));
const Group_1 = __importDefault(require("../../models/Group"));
const thirdSignUp = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    // validations
    // validateUser(userData)
    // Proceed as normal
    const newUser = yield User_1.default.create(userData);
    // Encontramos su grupo para devolverlo
    const group = yield Group_1.default.find({
        $and: [
            { groupNumber: newUser.group },
            { cohort: newUser.cohort }
        ]
    });
    //Configuramos para que pueda recibir emails
    let config = {
        service: "gmail",
        auth: {
            user: "henrymoon.latam@gmail.com",
            pass: "xdgpunccyritkucn",
        },
    };
    // Indicamos online
    newUser.status = 'online';
    newUser.cohort = userData.cohort;
    yield newUser.save();
    let transporter = nodemailer_1.default.createTransport(config);
    let MailGenerator = new mailgen_1.default({
        theme: "default",
        product: {
            name: "Welcome to HenryMoon!",
            link: "https://mailgen.js/",
        },
    });
    let response = {
        body: {
            name: userData.name,
            intro: "Welcome to our community! We are pleased to have you as a member of our Henry Moon website. We hope you enjoy your experience on our platform and that you find everything you need. \n\n As a new member, you will have access to all functions and features of our website, including:",
            table: {
                data: [
                    {
                        description: "Play games, chat, have live calls, team schedule, among many other options",
                    },
                ],
            },
            outro: "If you have any questions or problems while using our website, feel free to contact our support team. We are here to help you and make sure you have the best experience possible. Thank you so much. Kind regards. Henrymoon",
        },
    };
    let mail = MailGenerator.generate(response);
    let message = {
        from: "henrymoon.latam@gmail.com",
        to: userData.email,
        subject: "Henry Moon",
        html: mail,
    };
    yield transporter.sendMail(message);
    return {
        access: true,
        token: (0, helpers_1.createToken)({ id: newUser._id, email: newUser.name }),
        user: Object.assign(Object.assign({}, newUser._doc), { groupDetail: group })
    };
});
exports.default = thirdSignUp;
// const { userEmail, userName } = req.body
// let config = {
//   service: 'gmail',
//   auth: {
//     user: EMAIL,
//     pass: PASSWORD
//   }
// }
// let transporter = nodemailer.createTransport(config)
// let MailGenerator = new Mailgen({
//   theme: 'default',
//   product: {
//     name: 'Mailgen',
//     link: 'https://mailgen.js/'
//   }
// })
// let response = {
//   body: {
//     name: userName,
//     intro: 'Your bill has arrived',
//     table: {
//       data: [
//         {
//           item: 'Nodemailer Stack Book',
//           description: 'A backend application',
//           price: '$10.99'
//         }
//       ]
//     },
//     outro: 'Nos vemos parcerito'
//   }
// }
// let mail = MailGenerator.generate(response)
// let message = {
//   from: EMAIL,
//   to: userEmail,
//   subject: 'Una bella orden de prueba',
//   html: mail
// }
// const resp = await transporter.sendMail(message)
