"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// ACÁ DEBERÍAMOS IMPORTAR LOS HANDLERS
const paymentHandlers_1 = require("../handlers/paymentHandlers");
const payment = (0, express_1.Router)();
payment.post('/create-order', paymentHandlers_1.createOrderHandler);
payment.get('/capture-order', paymentHandlers_1.captureOrderHandler);
payment.get('/cancel-order', paymentHandlers_1.cancelOrderHandler);
payment.get('/all-donations', paymentHandlers_1.getAllDonationsHandler);
exports.default = payment;
