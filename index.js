"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./src/app"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT || 3001;
const { DB_USER, DB_PASSWORD, DB_SERVER, DB_NAME } = process.env;
mongoose_1.default
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_SERVER}/${DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`🚀  Server ready at ${PORT}`);
    });
})
    .catch((error) => {
    console.error("F en el chat: Error in the connection");
    console.error(error);
});
