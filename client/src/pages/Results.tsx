import React, { useEffect } from 'react';
import { AppDispatch, RootState, useRecipeDispatch, useRecipeSelector } from '../store/store';
import { Recipe } from '../models/types';
import { getRecipeRandom, postSaveRecipe } from '../store/reducers/recipesReducer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';


const Results: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useRecipeDispatch();
  const { recipes } = useRecipeSelector((state: RootState) => state.recipes);
  const [user] = useAuthState(auth);

  const handleRandom = async () => {
    console.log("newRecipe: ");
    dispatch(getRecipeRandom());
  }

  const handleHomepage = () => {
    navigate(`/`);
  };

  const handleSaveRecipe = async (recipeId: number, recipe: Recipe) => {
    if (!user) {
      console.error('User not logged in');
      return;
    }

    dispatch(postSaveRecipe(recipeId, recipe, user));
  };

  useEffect(() => {
  }, [dispatch]);

  return (
    <section className="results">
      <button className="result__homepage-button" onClick={handleHomepage}>
        Return to homepage
      </button>
      <button className="result__getdifferent-button" onClick={handleRandom}>
        Get a different recipe
      </button>
      {!Array.isArray(recipes) ? '' : recipes.map((r: any) => (
        <article key={r.id} className="result">
          <button className="result__save-btn" onClick={() => handleSaveRecipe(r.id, r)}>Save recipe</button>
          <h2 className="result__title">{r.title}</h2>
          <img className="result__image" src={r.image} alt={r.title} />
          <h3 className="result__ingredients-heading">Ingredients:</h3>
          <ul className="result__ingredients-list">
            {r.extendedIngredients.map((i: any) => (
              <li key={`${r.id}-${i.id}`} className="result__ingredient">{i.original}</li>
            ))}
          </ul>
          <h3 className="result__instructions-heading">Instructions</h3>
          <div className="result__instructions" dangerouslySetInnerHTML={{ __html: r.instructions }}></div>
        </article>
      ))}
    </section>
  );
};

export default Results;
