import { Request, Response } from "express";

// add recipe to favorite list of user account
export const createFavorites = async (req: Request, res: Response) => {
    try {
 // todo
    } catch (error) {
        console.error('getRandomRecipe error: ', error);
        res.status(500).json({ message: 'api call failed' })
    }
}

// view favorite list
export const getFavorites = async (req: Request, res: Response) => {
    try {
 // todo
    } catch (error) {
        console.error('getRandomRecipe error: ', error);
        res.status(500).json({ message: 'api call failed' })
    }
}

// cooked recipe and add to cooked/review list
export const updateFavorites = async (req: Request, res: Response) => {
    try {
 // todo
    } catch (error) {
        console.error('getRandomRecipe error: ', error);
        res.status(500).json({ message: 'api call failed' })
    }
}

// delete recipe from (wish)lists
export const deleteFavorites = async (req: Request, res: Response) => {
    try {
 // todo
    } catch (error) {
        console.error('getRandomRecipe error: ', error);
        res.status(500).json({ message: 'api call failed' })
    }
}