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
exports.getAllDonationsHandler = exports.cancelOrderHandler = exports.captureOrderHandler = exports.createOrderHandler = void 0;
const Donation_1 = __importDefault(require("./../models/Donation"));
const createOrder_1 = __importDefault(require("../controllers/paymentController/createOrder"));
const captureOrder_1 = __importDefault(require("../controllers/paymentController/captureOrder"));
const getAllDonations_1 = __importDefault(require("../controllers/paymentController/getAllDonations"));
const createOrderHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, createOrder_1.default)(req.body);
        return res.status(200).json(data);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.createOrderHandler = createOrderHandler;
const captureOrderHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token, name, email } = req.query;
    try {
        const { purchase_units } = yield (0, captureOrder_1.default)(token);
        const amount = purchase_units[0].payments.captures[0].amount;
        const paymentInfo = Object.assign({ name,
            email }, amount);
        const newDonation = yield Donation_1.default.create(paymentInfo);
        res.redirect("http://localhost:5173/donation");
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.captureOrderHandler = captureOrderHandler;
const cancelOrderHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.redirect("http://localhost:5173/donation");
});
exports.cancelOrderHandler = cancelOrderHandler;
const getAllDonationsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allDonations = yield (0, getAllDonations_1.default)();
        return res.status(200).json(allDonations);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.getAllDonationsHandler = getAllDonationsHandler;
