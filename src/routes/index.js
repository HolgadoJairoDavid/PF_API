"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const cohort_routes_1 = __importDefault(require("./cohort.routes"));
const group_routes_1 = __importDefault(require("./group.routes"));
const game_routes_1 = __importDefault(require("./game.routes"));
const ranking_routes_1 = __importDefault(require("./ranking.routes"));
const userGame_routes_1 = __importDefault(require("./userGame.routes"));
const payment_routes_1 = __importDefault(require("./payment.routes"));
const dev_routes_1 = __importDefault(require("./dev.routes"));
const chat_route_1 = __importDefault(require("./chat.route"));
const comment_routes_1 = __importDefault(require("./comment.routes"));
const router = (0, express_1.Router)();
router.use('/auth', auth_routes_1.default);
router.use('/user', user_routes_1.default);
router.use('/cohort', cohort_routes_1.default);
router.use('/group', group_routes_1.default);
router.use('/game', game_routes_1.default);
router.use('/ranking', ranking_routes_1.default);
router.use('/payment', payment_routes_1.default);
router.use('/usergame', userGame_routes_1.default);
router.use('/dev', dev_routes_1.default);
router.use('/chat', chat_route_1.default);
router.use('/comment', comment_routes_1.default);
exports.default = router;
