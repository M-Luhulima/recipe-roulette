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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuizRecipesFromApi = exports.getRandomRecipeFromApi = void 0;
const axios_1 = __importDefault(require("axios"));
// API call 1 random recipe
const getRandomRecipeFromApi = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('SPOONACULAR_API: ', process.env.SPOONACULAR_API);
    const response = yield axios_1.default.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API}&number=1`);
    console.log(response.data);
    console.log("hellllllllllo"); // Add this line to check if data is being returned
    return response.data.recipes[0];
});
exports.getRandomRecipeFromApi = getRandomRecipeFromApi;
// API call 3 recipes after quiz > NOG MAKEN
const getQuizRecipesFromApi = (type, diet, intolerances, maxReadyTime, cuisine) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API}&type=${type}&diet=${diet}&intolerances=${intolerances}&maxReadyTime=${maxReadyTime}&cuisine=${cuisine}&number=3`);
    console.log(response.data);
    console.log("hellllllllllo"); // Add this line to check if data is being returned
    return response.data.recipes;
});
exports.getQuizRecipesFromApi = getQuizRecipesFromApi;
