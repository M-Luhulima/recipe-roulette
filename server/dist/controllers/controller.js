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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuizRecipes = exports.getRandomRecipe = void 0;
// import mongoose from "mongoose";
// // import Task, { ITask } from "../models/taskSchema";
const spoonAPI_1 = require("../API/spoonAPI");
// // GET all tasks //fix type error
// const getTasks = async (
//   req: Request,
//   res: Response
// ): Promise<Response<any, Record<string, any>>> => {
//   const tasks: ITask[] = await Task.find({});
//   return res.status(200).json(tasks);
// };
// // GET a single task
// const getTask = async (
//   req: Request,
//   res: Response
// ): Promise<Response<any, Record<string, any>>> => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "The task id is not found" });
//   }
//   const task: ITask | null = await Task.findById(id);
//   if (!task) {
//     return res.status(404).json({ error: "The task id is not found" });
//   }
//   return res.status(200).json(task);
// };
// //POST Create a new task
// const createTask = async (
//   req: Request,
//   res: Response
// ): Promise<Response<any, Record<string, any>>> => {
//   const { time, title, quantity } = req.body;
//   if (!time || !title || !quantity) {
//     return res
//       .status(400)
//       .json({ error: "Task not added. All fields required." });
//   }
//   // Add document to db
//   try {
//     const task: ITask = await Task.create({ time, title, quantity });
//     return res.status(200).json(task);
//   } catch (error) {
//     return res.status(400).json({ error: (error as Error).message });
//   }
// };
// //DELETE Delete task
// const deleteTask = async (
//   req: Request,
//   res: Response
// ): Promise<Response<any, Record<string, any>>> => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "task with id is not found" });
//   }
//   const task: ITask | null = await Task.findOneAndDelete({ _id: id });
//   if (!task) {
//     return res.status(404).json({ error: "task id not found" });
//   }
//   return res.status(200).json(task);
// };
// //PUT Update task
// const updateTask = async (
//   req: Request,
//   res: Response
// ): Promise<Response<any, Record<string, any>>> => {
//   const { id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "task with id is not found" });
//   }
//   const task: ITask | null = await Task.findByIdAndUpdate(id, req.body, {
//     new: true,
//   });
//   if (!task) {
//     return res.status(404).json({ error: "task id not found" });
//   }
//   return res.status(200).json(task);
// };
// // export { getTasks, getTask, createTask, deleteTask, updateTask };
const getRandomRecipe = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // handling
    const randomRecipe = yield (0, spoonAPI_1.getRandomRecipeFromApi)();
    console.log('randomRecipe: ', randomRecipe);
    // output
    res.json(randomRecipe);
});
exports.getRandomRecipe = getRandomRecipe;
const getQuizRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, diet, intolerances, maxReadyTime, cuisine } = req.query;
    // validation
    if (!maxReadyTime || !cuisine || !diet || !intolerances || !type) {
        res.status(400).json({ message: 'incorrect query params' });
    }
    const quizRecipes = yield (0, spoonAPI_1.getQuizRecipesFromApi)(type, diet, intolerances, Number(maxReadyTime), cuisine);
    res.json(quizRecipes);
});
exports.getQuizRecipes = getQuizRecipes;
