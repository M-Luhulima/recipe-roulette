"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteRecipe = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const favoriteRecipeSchema = new mongoose_1.default.Schema({
    userId: { type: String, required: true },
    recipeId: { type: String, required: true },
    isCooked: { type: Boolean, required: true, default: false },
    review: { type: String },
});
exports.FavoriteRecipe = mongoose_1.default.model('FavoriteRecipe', favoriteRecipeSchema);
