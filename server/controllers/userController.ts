import { Request, Response } from 'express';
import { FavoriteRecipe, IFavoriteRecipe } from '../models/schema';

// add recipe to favorite list of user account
export const createFavorites = async (req: Request, res: Response) => {
    try {
        const { userId, recipeId } = req.body;
        
        const favoriteRecipe: IFavoriteRecipe = new FavoriteRecipe({
            userId,
            recipeId,
        });
        
        await favoriteRecipe.save();
        
        res.status(201).json(favoriteRecipe);
    } catch (error) {
        console.error('createFavorites error: ', error);
        res.status(500).json({ message: 'api call failed' });
    }
};

// view favorite list
export const getFavorites = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        
        const favoriteRecipes = await FavoriteRecipe.find({ userId });
        // delete favoriteRecipes._id
        
        res.json(favoriteRecipes);
    } catch (error) {
        console.error('getFavorites error: ', error);
        res.status(500).json({ message: 'api call failed' });
    }
};

// cooked recipe and add to cooked/review list
export const updateFavorites = async (req: Request, res: Response) => {
    try {
        const { userId, recipeId } = req.params;
        const { isCooked, review } = req.body;
        
        const favoriteRecipe = await FavoriteRecipe.findOne({ userId, recipeId });
    
    if (!favoriteRecipe) {
        return res.status(404).json({ message: 'Favorite recipe not found' });
    }
    
    favoriteRecipe.isCooked = isCooked;
    favoriteRecipe.review = review;
    
    await favoriteRecipe.save();
    
    res.json(favoriteRecipe);
  } catch (error) {
    console.error('updateFavorites error: ', error);
    res.status(500).json({ message: 'api call failed' });
  }
};

// delete recipe from favorite lists
export const deleteFavorites = async (req: Request, res: Response) => {
    try {
      const { userId, recipeId } = req.params;
  
      const favoriteRecipe = await FavoriteRecipe.findOneAndDelete({ userId, recipeId });
  
      if (!favoriteRecipe) {
        return res.status(404).json({ message: 'Favorite recipe not found' });
      }
  
      res.status(204).json(favoriteRecipe);
    } catch (error) {
      console.error('deleteFavorites error: ', error);
      res.status(500).json({ message: 'api call failed' });
    }
  };
  

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