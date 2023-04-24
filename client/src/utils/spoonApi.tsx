// API call 1 random recipe
interface Recipe {
  // Define the recipe object properties here
}
export const getRandomRecipe = async (): Promise<void | {}> => {
  return await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API}&number=1`
  )
    .then((data) => data.json())
    .then((list) => {
      console.log(list);
      console.log("hellllllllllo"); // Add this line to check if data is being returned
      return list;
    });
};

// API call 3 recipes after quiz > NOG MAKEN
export const getRecipes = async (): Promise<void | {}> => {
  return await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API}&number=3`
  )
    .then((data) => data.json())
    .then((list) => {
      console.log(list);
      console.log("hellllllllllo"); // Add this line to check if data is being returned
      return list;
    });
};
// https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2


