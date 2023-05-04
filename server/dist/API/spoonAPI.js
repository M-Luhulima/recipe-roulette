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
exports.getRandomRecipeFromApi = exports.getQuizRecipesFromApi = exports.getQuizRecipesFromApi2 = exports.getRandomRecipeFromApi2 = void 0;
const axios_1 = __importDefault(require("axios"));
// API call 1 random recipe
const getRandomRecipeFromApi2 = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('SPOONACULAR_API: ', process.env.SPOONACULAR_API);
    const response = yield axios_1.default.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API}&number=1`);
    console.log('getRandomRecipeFromAPi response.data: ', response.data);
    console.log("getRandomRecipeFromApi"); // Add this line to check if data is being returned
    const recipeId = response.data.recipes[0].id;
    console.log('recipeId: ', recipeId);
    // Add this code block to fetch additional recipe information
    const recipeInfoResponse = yield axios_1.default.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
        params: {
            apiKey: process.env.SPOONACULAR_API,
        }
    });
    console.log('recipeInfoResponse: ', recipeInfoResponse.data);
    // Combine the recipe information and basic recipe data
    const recipe = Object.assign(Object.assign({}, response.data.recipes[0]), recipeInfoResponse.data);
    return recipe;
});
exports.getRandomRecipeFromApi2 = getRandomRecipeFromApi2;
// API call 3 recipes after quiz >> maxReadyTime lijkt ingevuld te moeten worden als je de link uitprobeert
const mockResult = [
    {
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: true,
        cheap: false,
        veryPopular: true,
        sustainable: false,
        lowFodmap: false,
        weightWatcherSmartPoints: 15,
        gaps: 'no',
        preparationMinutes: 5,
        cookingMinutes: 0,
        aggregateLikes: 689,
        healthScore: 64,
        creditsText: 'Jen West',
        sourceName: 'Pink When',
        pricePerServing: 206.79,
        extendedIngredients: [[Object], [Object], [Object], [Object], [Object]],
        id: 715497,
        title: 'Berry Banana Breakfast Smoothie',
        readyInMinutes: 5,
        servings: 1,
        sourceUrl: 'http://www.pinkwhen.com/berry-banana-breakfast-smoothie/',
        image: 'https://spoonacular.com/recipeImages/715497-556x370.jpg',
        imageType: 'jpg',
        summary: 'If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about <b>21g of protein</b>, <b>10g of fat</b>, and a total of <b>457 calories</b>. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>super spoonacular score of 99%</b>. Similar recipes include <a href="https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1364145">Berry Banana Breakfast Smoothie</a>, <a href="https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1405583">Berry Banana Breakfast Smoothie</a>, and <a href="https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1601311">Berry Banana Breakfast Smoothie</a>.',
        cuisines: [],
        dishTypes: ['morning meal', 'brunch', 'beverage', 'breakfast', 'drink'],
        diets: ['lacto ovo vegetarian'],
        occasions: [],
        winePairing: { pairedWines: [], pairingText: '', productMatches: [] },
        instructions: 'Take some yogurt in your favorite flavor and add 1 container to your blender. Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.',
        analyzedInstructions: [[Object]],
        report: 'weird picture',
        tips: { health: [Array], price: [Array], cooking: [], green: [Array] },
        openLicense: 2,
        suspiciousDataScore: 0,
        approved: 2,
        unknownIngredients: [],
        userTags: [],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/berry-banana-breakfast-smoothie-715497'
    },
    {
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: true,
        cheap: false,
        veryPopular: true,
        sustainable: false,
        lowFodmap: false,
        weightWatcherSmartPoints: 15,
        gaps: 'no',
        preparationMinutes: 5,
        cookingMinutes: 0,
        aggregateLikes: 689,
        healthScore: 64,
        creditsText: 'Jen West',
        sourceName: 'Pink When',
        pricePerServing: 206.79,
        extendedIngredients: [[Object], [Object], [Object], [Object], [Object]],
        id: 5646545,
        title: 'Pizza Pollo and Piña',
        readyInMinutes: 5,
        servings: 1,
        sourceUrl: 'http://www.pinkwhen.com/berry-banana-breakfast-smoothie/',
        image: 'https://spoonacular.com/recipeImages/715497-556x370.jpg',
        imageType: 'jpg',
        summary: 'If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about <b>21g of protein</b>, <b>10g of fat</b>, and a total of <b>457 calories</b>. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>super spoonacular score of 99%</b>. Similar recipes include <a href="https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1364145">Berry Banana Breakfast Smoothie</a>, <a href="https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1405583">Berry Banana Breakfast Smoothie</a>, and <a href="https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1601311">Berry Banana Breakfast Smoothie</a>.',
        cuisines: [],
        dishTypes: ['morning meal', 'brunch', 'beverage', 'breakfast', 'drink'],
        diets: ['lacto ovo vegetarian'],
        occasions: [],
        winePairing: { pairedWines: [], pairingText: '', productMatches: [] },
        instructions: 'Take some yogurt in your favorite flavor and add 1 container to your blender. Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.',
        analyzedInstructions: [[Object]],
        report: 'weird picture',
        tips: { health: [Array], price: [Array], cooking: [], green: [Array] },
        openLicense: 2,
        suspiciousDataScore: 0,
        approved: 2,
        unknownIngredients: [],
        userTags: [],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/berry-banana-breakfast-smoothie-715497'
    }
];
const getQuizRecipesFromApi2 = (type, diet, intolerances) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
            apiKey: process.env.SPOONACULAR_API,
            maxReadyTime: 900,
            intolerances,
            number: 50,
            type,
            diet,
        }
    });
    console.log('getQuizRecipesFromApi: ', response.data);
    const fullResults = response.data.results;
    const random = fullResults[Math.floor(Math.random() * fullResults.length)];
    const results = [random];
    if (Array.isArray(results) && results.length > 0) {
        // convert recipe information into recipe
        const infoResponse = yield axios_1.default.get(`https://api.spoonacular.com/recipes/informationBulk`, {
            params: {
                apiKey: process.env.SPOONACULAR_API,
                ids: results.map((recipe) => recipe.id).join(','),
            }
        });
        console.log('infoResponse: ', infoResponse.data);
        return infoResponse.data;
    }
    return [];
});
exports.getQuizRecipesFromApi2 = getQuizRecipesFromApi2;
// TODO: turn off mock api response, change name at 191 to getQuizRecipesFromApi2 and change name at 72 to getQuizRecipesFromApi
const getQuizRecipesFromApi = (type, diet, intolerances) => __awaiter(void 0, void 0, void 0, function* () {
    const random = mockResult[Math.floor(Math.random() * mockResult.length)];
    return [random];
});
exports.getQuizRecipesFromApi = getQuizRecipesFromApi;
// also do this rename for this api
const getRandomRecipeFromApi = () => __awaiter(void 0, void 0, void 0, function* () {
    const random = mockResult[Math.floor(Math.random() * mockResult.length)];
    return random;
});
exports.getRandomRecipeFromApi = getRandomRecipeFromApi;
