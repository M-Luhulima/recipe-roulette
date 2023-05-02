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
exports.deleteFavorites = exports.updateFavorites = exports.getFavorites = exports.createFavorites = void 0;
const schema_1 = require("../models/schema");
// add recipe to favorite list of user account
const createFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { recipeId, recipe } = req.body;
        const userId = req.headers.uid;
        const favoriteRecipe = new schema_1.FavoriteRecipe({
            recipeId,
            userId,
            recipe,
        });
        yield favoriteRecipe.save();
        res.status(201).json(favoriteRecipe);
    }
    catch (error) {
        console.error('createFavorites error: ', error);
        res.status(500).json({ message: 'api call failed' });
    }
});
exports.createFavorites = createFavorites;
// view favorite list
const getFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.headers.uid;
        const favoriteRecipes = yield schema_1.FavoriteRecipe.find({ userId });
        // delete favoriteRecipes._id
        res.json(favoriteRecipes);
    }
    catch (error) {
        console.error('getFavorites error: ', error);
        res.status(500).json({ message: 'api call failed' });
    }
});
exports.getFavorites = getFavorites;
// cooked recipe and add to cooked/review list
const updateFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.headers.uid;
        const { recipeId } = req.params;
        const { isCooked, review } = req.body;
        // FavoriteRecipe.findByIdAndUpdate
        const favoriteRecipe = yield schema_1.FavoriteRecipe.findOne({ userId, recipeId });
        if (!favoriteRecipe) {
            return res.status(404).json({ message: 'Favorite recipe not found' });
        }
        favoriteRecipe.isCooked = isCooked;
        favoriteRecipe.review = review;
        yield favoriteRecipe.save();
        res.json(favoriteRecipe);
    }
    catch (error) {
        console.error('updateFavorites error: ', error);
        res.status(500).json({ message: 'api call failed' });
    }
});
exports.updateFavorites = updateFavorites;
// delete recipe from favorite lists
const deleteFavorites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.headers.uid;
        const { recipeId } = req.params;
        const favoriteRecipe = yield schema_1.FavoriteRecipe.findOneAndDelete({ userId, recipeId });
        if (!favoriteRecipe) {
            return res.status(404).json({ message: 'Favorite recipe not found' });
        }
        res.status(204).json(favoriteRecipe);
    }
    catch (error) {
        console.error('deleteFavorites error: ', error);
        res.status(500).json({ message: 'api call failed' });
    }
});
exports.deleteFavorites = deleteFavorites;
// --------------------------------------------
// import { Request, Response } from "express";
// // add recipe to favorite list of user account
// export const createFavorites = async (req: Request, res: Response) => {
//     try {
//  // todo
//     } catch (error) {
//         console.error('getRandomRecipe error: ', error);
//         res.status(500).json({ message: 'api call failed' })
//     }
// }
// // view favorite list
// export const getFavorites = async (req: Request, res: Response) => {
//     try {
//  // todo
//     } catch (error) {
//         console.error('getRandomRecipe error: ', error);
//         res.status(500).json({ message: 'api call failed' })
//     }
// }
// // cooked recipe and add to cooked/review list
// export const updateFavorites = async (req: Request, res: Response) => {
//     try {
//  // todo
//     } catch (error) {
//         console.error('getRandomRecipe error: ', error);
//         res.status(500).json({ message: 'api call failed' })
//     }
// }
// // delete recipe from (wish)lists
// export const deleteFavorites = async (req: Request, res: Response) => {
//     try {
//  // todo
//     } catch (error) {
//         console.error('getRandomRecipe error: ', error);
//         res.status(500).json({ message: 'api call failed' })
//     }
// }
