import { Router } from "express";
import {
  createGroupHandler,
  getGroupByIDHandler,
  updateGroupHandler,
  deleteGroupHandler,
  getAllGroupsHandler,
  reviveGroupByIDHandler,
  findGroupHandler,
} from "../handlers/groupHandlers";

const groupRouter = Router();

// create Group
groupRouter.post("/", createGroupHandler);

groupRouter.get("/all", getAllGroupsHandler);

groupRouter.get("/:id", getGroupByIDHandler);

groupRouter.post("/update", updateGroupHandler);

groupRouter.delete("/:id", deleteGroupHandler);

groupRouter.post("/revive/:id", reviveGroupByIDHandler);

groupRouter.post("/find", findGroupHandler);

export default groupRouter;
