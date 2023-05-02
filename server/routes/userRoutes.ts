import express, { Router } from "express";
import { createFavorites, getFavorites, updateFavorites, deleteFavorites } from "../controllers/userController";
const router: Router = express.Router();

router.post('/favorites', createFavorites);
router.get('/favorites', getFavorites);
router.patch('/favorites/:recipeId', updateFavorites);
router.delete('/favorites/:recipeId', deleteFavorites);

export default router;
