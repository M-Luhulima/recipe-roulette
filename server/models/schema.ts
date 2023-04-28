import mongoose, { Document } from 'mongoose';

export interface IFavoriteRecipe extends Document {
  userId: string;
  recipeId: string;
  isCooked: boolean;
  review?: string;
}

const favoriteRecipeSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, required: true },
  recipeId: { type: mongoose.Types.ObjectId, required: true },
  isCooked: { type: Boolean, required: true, default: false },
  review: { type: String },
});

export const FavoriteRecipe = mongoose.model<IFavoriteRecipe>(
  'FavoriteRecipe',
  favoriteRecipeSchema
);