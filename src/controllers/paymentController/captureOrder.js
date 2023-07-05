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
const captureOrder = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const auth = {
        username: "AYehC4txdpVCRVlBWVZDzEkGneM0ACa0Gfq3kXCf0wgdMXhJovASPjxE9E5bFZNn5RScqAaZWuEjZSwO",
        password: "EJbIX4_V-KcVW2-0-W9RkaS3x9G8vK0oFwXQQNjdweN9uJLiOgzIcKxKgakV-PvF7e8hPci2tWvxHmZ1",
    };
    // Capturamos la orden
    // Si el usuario paga, devuelve objeto con la confirmación
    const { data } = yield axios_1.default.post(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${token}/capture`, {}, // no enviamos datos por el body
    {
        auth
    });
    return data;
});
exports.default = captureOrder;
