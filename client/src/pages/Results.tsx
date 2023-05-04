import React, { useEffect, useState } from 'react';
import { AppDispatch, RootState, useRecipeDispatch, useRecipeSelector } from '../store/store';
import { Recipe } from '../models/types';
import { getQuizRecipe, postSaveRecipe } from '../store/reducers/recipesReducer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';
import AuthDetails from "../components/auth/authDetails";
import { QuizAnswers } from './Quiz';


const Results: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useRecipeDispatch();
  const [answers] = useState<QuizAnswers>([]);
  const { recipes } = useRecipeSelector((state: RootState) => state.recipes);
  const [user] = useAuthState(auth);
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleHomepage = () => {
    navigate(`/`);
  };

  const handleRedo = () => {
    // re-calls the api with same answers
    console.log('handleRedo answers: ', answers);
    dispatch(getQuizRecipe(answers));
  };

  const handleSaveRecipe = async (recipeId: number, recipe: Recipe) => {
    if (!user) {
      console.error('User not logged in');
      setErrorMessage("Please log in on the homepage.");
      return;
    }

    dispatch(postSaveRecipe(recipeId, recipe, user));
  };

  useEffect(() => {
  }, [dispatch]);

  return (
    <div>
      <br /><br />
      {/* TODO: replace br with css */}
      <button className="result__homepage-button" onClick={handleHomepage}>
        Return to home
      </button>
      <section className="results">
        <button className="result__getdifferent-button" onClick={handleRedo}>
          Next
        </button>
        {!Array.isArray(recipes) ? '' : recipes.map((r: any) => (
          <article key={r.id} className="result">
            <button className="result__save-button" onClick={() => handleSaveRecipe(r.id, r)}>Save</button>
            <article className="errorMessage">
          {errorMessage && <p className="errorMessage__text">{errorMessage}</p>}
        </article>
            <h2 className="result__title">{r.title}</h2>
            <img className="result__image" src={r.image} alt={r.title} />
            <h3 className="result__ingredients-heading">Ingredients:</h3>
            <ul className="result__ingredients-list">
              {r.extendedIngredients.map((i: any) => (
                <li key={`${r.id}-${i.id}`} className="result__ingredient">{i.original}</li>
              ))}
            </ul>
            <h3 className="result__instructions-heading">Instructions:</h3>
            <div className="result__instructions" dangerouslySetInnerHTML={{ __html: r.instructions }}></div>
            <AuthDetails />
          </article>
        ))}
      </section>
    </div>
  );
};

export default Results;
