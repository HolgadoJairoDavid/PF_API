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
const axios_1 = __importDefault(require("axios"));
const createOrder = ({ name, _id, donation, email }) => __awaiter(void 0, void 0, void 0, function* () {
    // Creamos el pedido
    const order = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: donation,
                },
                description: "Ayuda para pagar HENRY",
            },
        ],
        application_context: {
            brand_name: "ArepasCamilo",
            landing_page: "LOGIN",
            user_action: "PAY_NOW",
            return_url: `https://henrymoon.onrender.com/payment/capture-order?name=${name}&email=${email}`,
            cancel_url: `https://henrymoon.onrender.com/payment/cancel-order`,
        },
    };
    // Generamos parámetros para enviar como campos de formulario
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    const auth = {
        username: "AYehC4txdpVCRVlBWVZDzEkGneM0ACa0Gfq3kXCf0wgdMXhJovASPjxE9E5bFZNn5RScqAaZWuEjZSwO",
        password: "EJbIX4_V-KcVW2-0-W9RkaS3x9G8vK0oFwXQQNjdweN9uJLiOgzIcKxKgakV-PvF7e8hPci2tWvxHmZ1",
    };
    // Generando el token
    const { data: { access_token }, } = yield axios_1.default.post("https://api-m.sandbox.paypal.com/v1/oauth2/token", params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        auth,
    });
    // Creando pedido con el token generado
    // Devuelve el pedido
    const { data } = yield axios_1.default.post(` https://api-m.sandbox.paypal.com/v2/checkout/orders`, order, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    return data;
});
exports.default = createOrder;
