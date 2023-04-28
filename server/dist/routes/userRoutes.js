"use strict";
// import express, { Router } from "express";
// const router: Router = express.Router();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {
//   getRandomRecipe,
// } from "../controllers/controller";
// router.get('/random-recipe', getRandomRecipe);
// export default router;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post('/favorites', userController_1.createFavorites);
router.get('/favorites/:userId', userController_1.getFavorites);
router.patch('/favorites/:userId/:recipeId', userController_1.updateFavorites);
router.delete('/favorites/:userId/:recipeId', userController_1.deleteFavorites);
exports.default = router;
