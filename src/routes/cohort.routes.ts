import { Router } from "express";
import {
  createCohortHandler,
  getCohortByIDHandler,
  updateCohortHandler,
  deleteCohortHandler,
  getAllCohortsHandler,
  reviveCohortByIDHandler,
  findCohortHandler,
} from "../handlers/cohortHandlers";

const cohortRouter = Router();

// create Cohort
cohortRouter.post("/", createCohortHandler);

cohortRouter.get("/all", getAllCohortsHandler);

cohortRouter.get("/:id", getCohortByIDHandler);

cohortRouter.post("/update", updateCohortHandler);

cohortRouter.delete("/:id", deleteCohortHandler);

cohortRouter.post("/revive/:id", reviveCohortByIDHandler);

cohortRouter.post("/find", findCohortHandler);

export default cohortRouter;
