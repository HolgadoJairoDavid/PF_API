"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const groupHandlers_1 = require("../handlers/groupHandlers");
const groupRouter = (0, express_1.Router)();
// create Group
groupRouter.post("/", groupHandlers_1.createGroupHandler);
groupRouter.get("/all", groupHandlers_1.getAllGroupsHandler);
groupRouter.get("/:id", groupHandlers_1.getGroupByIDHandler);
groupRouter.post("/update", groupHandlers_1.updateGroupHandler);
groupRouter.delete("/:id", groupHandlers_1.deleteGroupHandler);
groupRouter.post("/revive/:id", groupHandlers_1.reviveGroupByIDHandler);
groupRouter.post("/find", groupHandlers_1.findGroupHandler);
exports.default = groupRouter;
