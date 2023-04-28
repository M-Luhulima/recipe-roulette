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
    const { type, diet, intolerances } = req.query;
    // const { type, diet, intolerances, maxReadyTime, cuisine } = req.query;

    try {
        // const quizRecipes = await getQuizRecipesFromApi(type as string, diet as string, intolerances as string, Number(maxReadyTime), cuisine as string);
        const quizRecipes = await getQuizRecipesFromApi(type as string, diet as string, intolerances as string);
        console.log('quizRecipes: ', quizRecipes);

        res.json(quizRecipes);
    } catch (error) {
        console.error('getQuizRecipes error: ', error);
        res.status(500).json({ message: 'api call failed' })
    }
}
