// API call 1 random recipe
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

export const getRandomRecipe = async (): Promise<Recipe> => {
  console.log('REACT_APP_SPOONACULAR_API: ', process.env.REACT_APP_SPOONACULAR_API);
  return fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API}&number=1`
  )
    .then((data) => data.json())
    .then((list) => {
      console.log(list);
      console.log("hellllllllllo"); // Add this line to check if data is being returned
      return list.recipes[0];
    });
};

// API call 3 recipes after quiz > NOG MAKEN
export const getRecipes = async (): Promise<Recipe[]> => {
  return fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API}&number=3`
  )
    .then((data) => data.json())
    .then((list) => {
      console.log(list);
      console.log("hellllllllllo"); // Add this line to check if data is being returned
      return list.recipes;
    });
};
// https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2


