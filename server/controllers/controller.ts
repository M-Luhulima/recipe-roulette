import { Request, Response } from "express";
// import mongoose from "mongoose";
// // import Task, { ITask } from "../models/taskSchema";

import { getRandomRecipeFromApi, getQuizRecipesFromApi } from "../API/spoonAPI"

// example without
export const getRandomRecipeWithoutTryCatch = async (_req: Request, res: Response) => {
    const randomRecipe = await getRandomRecipeFromApi();
    console.log('randomRecipe: ', randomRecipe);

    res.json(randomRecipe);
}

// example with
export const getRandomRecipe = async (_req: Request, res: Response) => {
    try {
        const randomRecipe = await getRandomRecipeFromApi();
        console.log('randomRecipe: ', randomRecipe);

        res.json(randomRecipe);
    } catch (error) {
        console.error('getRandomRecipe error: ', error);
        res.status(500).json({ message: 'api call failed' })
    }
}
// next up: redux -> store -> axios api call -> localhost/api/quiz-recipe
export const getQuizRecipes = async (req: Request, res: Response) => {
    const { type, diet, intolerances, cuisine } = req.query;
    // const { type, diet, intolerances, maxReadyTime, cuisine } = req.query;

    try {
        // const quizRecipes = await getQuizRecipesFromApi(type as string, diet as string, intolerances as string, Number(maxReadyTime), cuisine as string);
        const quizRecipes = await getQuizRecipesFromApi(type as string, diet as string, intolerances as string, cuisine as string);
        console.log('quizRecipes: ', quizRecipes);

        res.json(quizRecipes);
    } catch (error) {
        console.error('getQuizRecipes error: ', error);
        res.status(500).json({ message: 'api call failed' })
    }
}

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