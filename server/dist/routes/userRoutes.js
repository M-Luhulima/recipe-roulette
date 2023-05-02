"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post('/favorites', userController_1.createFavorites);
router.get('/favorites', userController_1.getFavorites);
router.patch('/favorites/:recipeId', userController_1.updateFavorites);
router.delete('/favorites/:recipeId', userController_1.deleteFavorites);
exports.default = router;
