import { Recipe } from "../models/types";

export interface IFavoriteRecipe {
    userId: string;
    recipeId: string;
    isCooked: boolean;
    review?: string;
    recipe: Recipe;
  }
  