"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cohortHandlers_1 = require("../handlers/cohortHandlers");
const cohortRouter = (0, express_1.Router)();
// create Cohort
cohortRouter.post("/", cohortHandlers_1.createCohortHandler);
cohortRouter.get("/all", cohortHandlers_1.getAllCohortsHandler);
cohortRouter.get("/:id", cohortHandlers_1.getCohortByIDHandler);
cohortRouter.post("/update", cohortHandlers_1.updateCohortHandler);
cohortRouter.delete("/:id", cohortHandlers_1.deleteCohortHandler);
cohortRouter.post("/revive/:id", cohortHandlers_1.reviveCohortByIDHandler);
cohortRouter.post("/find", cohortHandlers_1.findCohortHandler);
exports.default = cohortRouter;
