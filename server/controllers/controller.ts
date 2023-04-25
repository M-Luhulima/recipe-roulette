import { Request, Response } from "express";
// import mongoose from "mongoose";
// // import Task, { ITask } from "../models/taskSchema";

import { getRandomRecipeFromApi, getQuizRecipesFromApi } from "../API/spoonAPI"


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


export const getRandomRecipe = async (_req: Request, res: Response) => {
   // handling
   const randomRecipe = await getRandomRecipeFromApi();
   console.log('randomRecipe: ', randomRecipe);
   // output
   res.json(randomRecipe);
}

export const getQuizRecipes = async (req: Request, res: Response) => {
    const {type, diet, intolerances, maxReadyTime, cuisine} = req.query;
    
    // validation
    if (!maxReadyTime || !cuisine || !diet || !intolerances || !type) {
        res.status(400).json({message: 'incorrect query params'});
    }
    const quizRecipes = await getQuizRecipesFromApi(type as string, diet as string, intolerances as string, Number(maxReadyTime), cuisine as string);
    res.json(quizRecipes)
  }