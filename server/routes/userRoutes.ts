// import express, { Router } from "express";
// const router: Router = express.Router();

// import {
//   getRandomRecipe,
// } from "../controllers/controller";

// router.get('/random-recipe', getRandomRecipe);

// export default router;


import express, { Router } from "express";
import { createFavorites, getFavorites, updateFavorites, deleteFavorites } from "../controllers/userController";
const router: Router = express.Router();

router.post('/favorites', createFavorites);
router.get('/favorites', getFavorites);
router.patch('/favorites', updateFavorites);
router.delete('/favorites', deleteFavorites);

export default router;