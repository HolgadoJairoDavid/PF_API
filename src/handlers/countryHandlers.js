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
exports.getAllCountriesHandler = exports.createManyCountriesHandler = exports.createCountryHandler = void 0;
const createCountry_1 = __importDefault(require("../controllers/countryControllers/createCountry"));
const createManyCountries_1 = __importDefault(require("../controllers/countryControllers/createManyCountries"));
const getAllCountries_1 = __importDefault(require("../controllers/countryControllers/getAllCountries"));
const createCountryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countryData = req.body;
    try {
        // hacer las comprobaciones aqui
        const newCountry = yield (0, createCountry_1.default)(countryData);
        res.status(200).json(newCountry);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createCountryHandler = createCountryHandler;
const createManyCountriesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const manyCountries = req.body;
    try {
        const rankings = yield (0, createManyCountries_1.default)(manyCountries);
        res.status(200).json(rankings);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createManyCountriesHandler = createManyCountriesHandler;
const getAllCountriesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // hacer las comprobaciones aqui
        const countrys = yield (0, getAllCountries_1.default)();
        res.status(200).json(countrys);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllCountriesHandler = getAllCountriesHandler;
