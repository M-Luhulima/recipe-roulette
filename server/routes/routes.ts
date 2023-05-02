import express, { Router } from "express";
const router: Router = express.Router();

import {
  getRandomRecipe, getQuizRecipes
} from "../controllers/controller";

router.get('/random-recipe', getRandomRecipe);

router.get('/quiz-recipe', getQuizRecipes);

export default router;
