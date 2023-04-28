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
exports.getQuizRecipes = exports.getRandomRecipe = exports.getRandomRecipeWithoutTryCatch = void 0;
// import mongoose from "mongoose";
// // import Task, { ITask } from "../models/taskSchema";
const spoonAPI_1 = require("../API/spoonAPI");
// example without
const getRandomRecipeWithoutTryCatch = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const randomRecipe = yield (0, spoonAPI_1.getRandomRecipeFromApi)();
    console.log('randomRecipe: ', randomRecipe);
    res.json(randomRecipe);
});
exports.getRandomRecipeWithoutTryCatch = getRandomRecipeWithoutTryCatch;
// example with
const getRandomRecipe = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const randomRecipe = yield (0, spoonAPI_1.getRandomRecipeFromApi)();
        console.log('randomRecipe: ', randomRecipe);
        res.json(randomRecipe);
    }
    catch (error) {
        console.error('getRandomRecipe error: ', error);
        res.status(500).json({ message: 'api call failed' });
    }
});
exports.getRandomRecipe = getRandomRecipe;
// next up: redux -> store -> axios api call -> localhost/api/quiz-recipe
const getQuizRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, diet, intolerances } = req.query;
    // const { type, diet, intolerances, maxReadyTime, cuisine } = req.query;
    try {
        // const quizRecipes = await getQuizRecipesFromApi(type as string, diet as string, intolerances as string, Number(maxReadyTime), cuisine as string);
        const quizRecipes = yield (0, spoonAPI_1.getQuizRecipesFromApi)(type, diet, intolerances);
        console.log('quizRecipes: ', quizRecipes);
        res.json(quizRecipes);
    }
    catch (error) {
        console.error('getQuizRecipes error: ', error);
        res.status(500).json({ message: 'api call failed' });
    }
});
exports.getQuizRecipes = getQuizRecipes;
