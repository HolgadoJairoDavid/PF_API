"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countryHandlers_1 = require("../handlers/countryHandlers");
const countryRouter = (0, express_1.Router)();
// create Country
countryRouter.post("/", countryHandlers_1.createCountryHandler);
// crea muchos countries
countryRouter.post("/many", countryHandlers_1.createManyCountriesHandler);
countryRouter.get("/all", countryHandlers_1.getAllCountriesHandler);
exports.default = countryRouter;
