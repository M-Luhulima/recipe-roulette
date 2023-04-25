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