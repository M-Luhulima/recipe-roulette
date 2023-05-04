import { FC, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import { getSavedRecipes, updateSavedRecipe, deleteRecipe } from "../store/reducers/recipesReducer";
import { AppDispatch, RootState, useRecipeDispatch, useRecipeSelector } from "../store/store";
import { IFavoriteRecipe } from "../store/types";

const FavRecipes: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { favRecipes } = useRecipeSelector((state: RootState) => state.recipes);
  const dispatch: AppDispatch = useRecipeDispatch();
  const [user] = useAuthState(auth);

  useEffect(() => {
    dispatch(getSavedRecipes());
  }, [dispatch]);


  const handleGetSavedRecipes = async () => {
    console.log('dsfd');
    dispatch(getSavedRecipes()).then(() => ref.current?.scrollIntoView({behavior: 'smooth'}));
  }

  const handleUpdateSavedRecipes = async (recipeId: string, isCooked: boolean, review: string) => {
    dispatch(updateSavedRecipe(recipeId, isCooked, review)).then(() => dispatch(getSavedRecipes()));
  }

  const handleDeleteRecipe = async (recipeId: string) => {
    if (!user) {
      console.error('User not logged in');
      return;
    }

    dispatch(deleteRecipe(recipeId, user)).then(() => dispatch(getSavedRecipes()));
  };

  return (
    <section className="favorites">
      <br/>
      <hr className="favorites__line" />
      <br/>
      <article className="favorites__container">
      <h2 className="favorites__title">Favorite Recipes</h2>
      <button className="favorites__button" onClick={() => handleGetSavedRecipes()}>Show favorites</button>
      </article>
      <br/>
      <div ref={ref}></div>

      <section className="favorites__recipe-container">
        {!Array.isArray(favRecipes) ? '' : favRecipes.map((r: IFavoriteRecipe) => (
          <article key={`${r.userId}-${r.recipeId}`} className="favorites__recipe">
            <h2 className="favorites__recipe-title">{r.recipe.title}</h2>
            <img className="favorites__recipe-image" src={r.recipe.image} alt={r.recipe.title} />
            <div className="favorites__recipe-buttoncontainer">
            <button className="favorites__recipe-updatebutton" onClick={() => handleUpdateSavedRecipes(r.recipeId, !r.isCooked, '')}>{r.isCooked ? "Not cooked" : "I've cooked it!"}</button>
            <button className="favorites__recipe-deletebutton" onClick={() => handleDeleteRecipe(r.recipeId)}>Remove</button>
            </div>
            <h3 className="favorites__recipe-subtitle">Ingredients:</h3>
            <ul className="favorites__recipe-list">
              {r.recipe.extendedIngredients.map((i: any) => (
                <li className="favorites__recipe-list-item" key={`${r.recipe.id}-${i.id}`}>{i.original}</li>
              ))}
            </ul>
            <h3 className="favorites__recipe-subtitle">Instructions:</h3>
            <section className="favorites__recipe-instructions" dangerouslySetInnerHTML={{ __html: r.recipe.instructions }}></section>
          </article>
        ))}
      </section>

    </section>
  );
};

export default FavRecipes
