"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller_1 = require("../controllers/controller");
router.get('/random-recipe', controller_1.getRandomRecipe);
router.get('/quiz-recipe', controller_1.getQuizRecipes);
exports.default = router;
//--------------------------------------------------
// import express, { Router } from "express";
// import {
//   createTask,
//   deleteTask,
//   getTask,
//   getTasks,
//   updateTask,
// } from "../controllers/taskController";
// const router: Router = express.Router();
// GET all scheduled tasks
// router.get("/", getTasks);
// GET single scheduled task
// router.get("/:id", getTask);
// POST new task on schedule //call createTaskfunction
// router.post("/", createTask);
// DELETE task on schedule
// router.delete("/:id", deleteTask);
// UPDATE task on chedule
// router.put("/:id", updateTask);
// export default router;
// ------------------------------------------------
