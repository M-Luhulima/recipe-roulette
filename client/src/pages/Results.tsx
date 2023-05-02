import React, { useEffect } from 'react';
import { AppDispatch, RootState, useRecipeDispatch, useRecipeSelector } from '../store/store';
// import axios from 'axios';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../services/firebase';
import { Recipe } from '../models/types';
import { postSaveRecipe } from '../store/reducers/recipesReducer';


const Results: React.FC = () => {
  const dispatch: AppDispatch = useRecipeDispatch();
  const { recipes } = useRecipeSelector((state: RootState) => state.recipes);
  // const [user] = useAuthState(auth);
  // const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    // dispatch(getRecipeRandom());
  }, [dispatch]);

  const handleSaveRecipe = async (recipeId: number, recipe: Recipe) => {
    dispatch(postSaveRecipe)
    // if (!user) {
    //   console.error('User not logged in');
    //   return;
    // }

    // try {
    //   const token = await user.getIdToken();
    //   const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/favorites`, { recipeId, recipe }, { headers: { idtoken: token } });
    //   console.log('Recipe saved successfully', res.data);
    // } catch (error) {
    //   console.error('Error saving recipe', error);
    // }
  };

  return (
    <div>
      {!Array.isArray(recipes) ? '' : recipes.map((r: any) => (
        <div key={r.id}>
          <button onClick={() => handleSaveRecipe(r.id, r)}>Save recipe</button>
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
    </div>
  );
};

export default Results;
