import { FC, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Recipe } from "../models/types";
import { auth } from "../services/firebase";
import { getSavedRecipes, updateSavedRecipe, deleteRecipe } from "../store/reducers/recipesReducer";
import { AppDispatch, RootState, useRecipeDispatch, useRecipeSelector } from "../store/store";
import { IFavoriteRecipe } from "../store/types";

const FavRecipes: FC = () => {
  const { favRecipes } = useRecipeSelector((state: RootState) => state.recipes);
  const dispatch: AppDispatch = useRecipeDispatch();
  const [user] = useAuthState(auth);

  useEffect(() => {
    dispatch(getSavedRecipes());
  }, [dispatch]);


  const handleGetSavedRecipes = async () => {
    dispatch(getSavedRecipes());
  }

  const handleUpdateSavedRecipes = async (recipeId: string, isCooked: boolean, review: string) => {
    dispatch(updateSavedRecipe(recipeId, isCooked, review));
    dispatch(getSavedRecipes());
  }

  const handleDeleteRecipe = async (recipeId: string) => {
    if (!user) {
      console.error('User not logged in');
      return;
    }

    dispatch(deleteRecipe(recipeId, user));
    dispatch(getSavedRecipes());
  };

  return (
    <section className="favorites">
      <h2 className="favorites__title">Favorite Recipes</h2>
      <button onClick={() => handleGetSavedRecipes()}>Show favorite recipes</button>

      {!Array.isArray(favRecipes) ? '' : favRecipes.map((r: IFavoriteRecipe) => (
        <div key={`${r.userId}-${r.recipeId}`}>
          <h2>{r.recipe.title}</h2>
          <p>{r.isCooked ? 'YES you cooked it' : 'still need to cook this'}</p>
          <img src={r.recipe.image} alt={r.recipe.title} />
          <button onClick={() => handleUpdateSavedRecipes(r.recipeId, !r.isCooked, '')}>{r.isCooked ? 'Uncook this it' : 'Cooked it'}</button>
          <button onClick={() => handleDeleteRecipe(r.recipeId)}>Delete recipe</button>
          <h3>Ingredients:</h3>
          <ul>
            {r.recipe.extendedIngredients.map((i: any) => (
              <li key={`${r.recipe.id}-${i.id}`}>{i.original}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <div dangerouslySetInnerHTML={{ __html: r.recipe.instructions }}></div>
        </div>
      ))}

    </section>
  );
};

export default FavRecipes
