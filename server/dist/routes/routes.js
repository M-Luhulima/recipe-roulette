"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller_1 = require("../controllers/controller");
router.get('/random-recipe', controller_1.getRandomRecipe);
router.get('/quiz-recipe', controller_1.getQuizRecipes);
exports.default = router;
