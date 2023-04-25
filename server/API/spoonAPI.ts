import axios from 'axios';

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  license: string;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  aggregateLikes: number;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  analyzedInstructions: any[]; // empty array because it's not defined what this object should contain
  cheap: boolean;
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: string[];
  gaps: string;
  glutenFree: boolean;
  instructions: string;
  ketogenic: boolean;
  lowFodmap: boolean;
  occasions: string[];
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  whole30: boolean;
  weightWatcherSmartPoints: number;
  dishTypes: string[];
  extendedIngredients: {
    aisle: string;
    amount: number;
    consitency: string;
    id: number;
    image: string;
    measures: {
      metric: {
        amount: number;
        unitLong: string;
        unitShort: string;
      };
      us: {
        amount: number;
        unitLong: string;
        unitShort: string;
      };
    };
    meta: string[];
    name: string;
    original: string;
    originalName: string;
    unit: string;
  }[];
}

// API call 1 random recipe
export const getRandomRecipeFromApi = async (): Promise<Recipe> => {
  console.log('SPOONACULAR_API: ', process.env.SPOONACULAR_API);
  const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API}&number=1`);
  console.log(response.data);
  console.log("getRandomRecipeFromApi"); // Add this line to check if data is being returned
  return response.data.recipes[0];
};

// API call 3 recipes after quiz
export const getQuizRecipesFromApi = async (type?: string, diet?: string, intolerances?: string, maxReadyTime?: number, cuisine?: string): Promise<Recipe[]> => {
  const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API}&type=${type}&diet=${diet}&intolerances=${intolerances}&maxReadyTime=${maxReadyTime}&cuisine=${cuisine}&number=3`);
  console.log(response.data);
  console.log("getQuizRecipesFromApi"); // Add this line to check if data is being returned
  return response.data.recipes;
};
