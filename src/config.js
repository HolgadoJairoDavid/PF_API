"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD = exports.EMAIL = exports.HOST = exports.PAYPAL_API = exports.PAYPAL_API_SECRET = exports.PAYPAL_API_CLIENT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // Crea las variables globales con el .dotenv
exports.PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
exports.PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
exports.PAYPAL_API = process.env.PAYPAL_API;
exports.HOST = process.env.HOST;
exports.EMAIL = process.env.EMAIL;
exports.PASSWORD = process.env.PASSWORD;
