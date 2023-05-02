import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Recipe } from "../models/types";
import { auth } from "../services/firebase";
import { deleteRecipe } from "../store/reducers/recipesReducer";
import { AppDispatch, useRecipeDispatch } from "../store/store";

const FavRecipes: FC = () => {
  const dispatch: AppDispatch = useRecipeDispatch();
  const [user] = useAuthState(auth);

  const handleDeleteRecipe = async (recipeId: number, recipe: Recipe) => {
    if (!user) {
      console.error('User not logged in');
      return;
    }

    dispatch(deleteRecipe(recipeId, user));
  };

  return (
  <section className="favorites">
    <h2 className="favorites__title">Favorite Recipes</h2>
    {/* <button onClick={() => handleDeleteRecipe(r.id, r)}>Delete recipe</button> */}

    {/*
    TODO: getFavourites should store the result of getFavourites in a NEW state variable 'favRecipes' [see: TODO's in recipeReducer.ts]

    Then in this file loop through this list, in the same fashion as you would in the results page:
          {!Array.isArray(recipes) ? '' : recipes.map((r: any) => (
        <div key={r.id}>
          <button onClick={() => handleSaveRecipe(r.id, r)}>Save recipe</button>
          {<button onClick={() => handleDeleteRecipe(r.id, r)}>Delete recipe</button> } <-- here the button will work. since R represents 1 of the fav recipes
          <h2>{r.title}</h2>
          <img src={r.image} alt={r.title} />
          <h3>Ingredients:</h3>
          <ul>
            {r.extendedIngredients.map((i: any) => (
              <li key={`${r.id}-${i.id}`}>{i.original}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <div dangerouslySetInnerHTML={{ __html: r.instructions }}></div>
        </div>
      ))}
    
    
    */}

  </section>
);
};

export default FavRecipes
