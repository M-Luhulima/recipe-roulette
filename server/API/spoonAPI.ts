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

export interface RecipeInformation {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

// API call 1 random recipe
export const getRandomRecipeFromApi = async (): Promise<Recipe> => {
  console.log('SPOONACULAR_API: ', process.env.SPOONACULAR_API);
  const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API}&number=1`);
  console.log(response.data);
  console.log("getRandomRecipeFromApi"); // Add this line to check if data is being returned
  return response.data.recipes[0];
};

// API call 3 recipes after quiz >> maxReadyTime lijkt ingevuld te moeten worden als je de link uitprobeert
const mockResult = {
  results: [
    {
      id: 715497,
      title: 'Berry Banana Breakfast Smoothie',
      image: 'https://spoonacular.com/recipeImages/715497-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 716432,
      title: 'Finger Foods: Frittata Muffins',
      image: 'https://spoonacular.com/recipeImages/716432-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 716276,
      title: 'Doughnuts',
      image: 'https://spoonacular.com/recipeImages/716276-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 782619,
      title: 'Mushroom Goat Cheese Baked Eggs',
      image: 'https://spoonacular.com/recipeImages/782619-312x231.png',
      imageType: 'png'
    },
    {
      id: 655219,
      title: 'Peanut Butter And Chocolate Oatmeal',
      image: 'https://spoonacular.com/recipeImages/655219-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 645032,
      title: 'Goldilocks Chia Seed Porridge',
      image: 'https://spoonacular.com/recipeImages/645032-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 655186,
      title: 'Peaches And Cream Oatmeal',
      image: 'https://spoonacular.com/recipeImages/655186-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 656481,
      title: 'Poached Egg With Spinach and Tomato',
      image: 'https://spoonacular.com/recipeImages/656481-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 638604,
      title: 'Chilled Swiss Oatmeal',
      image: 'https://spoonacular.com/recipeImages/638604-312x231.jpg',
      imageType: 'jpg'
    },
    {
      id: 647043,
      title: 'Homemade Muesli Breakfast Cereal',
      image: 'https://spoonacular.com/recipeImages/647043-312x231.jpg',
      imageType: 'jpg'
    }
  ],
  offset: 0,
  number: 10,
  totalResults: 274
}
//   export const getQuizRecipesFromApi = async (type?: string, diet?: string, intolerances?: string, cuisine?: string): Promise<Recipe[]> => {
//   const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
//     params: {
//       apiKey: process.env.SPOONACULAR_API,
//       maxReadyTime: 900,
//       intolerances,
//       number: 1,
//       cuisine,
//       type,
//       diet,
//     }
//   });
// TODO: add api call to https://api.spoonacular.com/recipes/{id}/information
//   console.log('getQuizRecipesFromApi: ', response.data);
//   return response.data.results;
// };

  export const getQuizRecipesFromApi = async (type?: string, diet?: string, intolerances?: string, cuisine?: string): Promise<RecipeInformation[]> => {
    const random = mockResult.results[Math.floor(Math.random()*mockResult.results.length)];
    return [random];
};

// https://api.spoonacular.com/recipes/complexSearch?apiKey=5370b60f2c82426f98d20e49ac93e783&type=&diet=&intolerances=&cuisine=&number=1

// export const getQuizRecipesFromApi = async (
//   type?: string,
//   diet?: string,
//   intolerances?: string,
//   cuisine?: string,
//   maxReadyTime?: number,
// ): Promise<Recipe[]> => {
//     let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API}&type=${type}&diet=${diet}&intolerances=${intolerances}&cuisine=${cuisine}&number=3`;
//   if (maxReadyTime !== undefined && maxReadyTime !== null && !isNaN(maxReadyTime)) {
//     url += `&maxReadyTime=${maxReadyTime}`;
//   }
//   const response = await axios.get(url);
//   console.log(response.data);
//   console.log("getQuizRecipesFromApi");
//   return response.data.recipes;
// };