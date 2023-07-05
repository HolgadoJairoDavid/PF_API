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
require("dotenv/config");
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../src/app"));
const agent = (0, supertest_1.default)(app_1.default);
describe('Test de rutas', () => {
    let mongoClient;
    let agent;
    const objUser = {
        username: 'clarkkent',
        password: 'superman',
        email: 'clarkkent@smallville.com'
    };
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // mongoClient = await connectDb(process.env.DB_LOCAL_TEST as string)
        mongoClient = yield mongoose_1.default.connect(process.env.DB_LOCAL_TEST);
        agent = (0, supertest_1.default)(app_1.default);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoClient.connection.close();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoClient.connection.db.dropDatabase();
    }));
    describe('POST /auth/signup', () => {
        it('Responde con estado 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield agent.post('/auth/signup').send(objUser);
            expect(response.statusCode).toEqual(200);
        }));
        it('Responde un objeto con las propiedades: "id", "username", "password", "email"', () => __awaiter(void 0, void 0, void 0, function* () {
            const { body } = yield agent.post('/auth/signup').send(objUser);
            const properties = ['_id', 'username', 'password', 'email'];
            properties.forEach((prop) => {
                expect(body).toHaveProperty(prop);
            });
        }));
        // it('Si hay un error responde con status: 400', async ()=>{
        //   // cuando no se proporcionan todos los datos
        //   const response = await agent.post('/auth/signup', objUser);
        //   expect(response.statusCode).toEqual(400)
        // })
    });
});
