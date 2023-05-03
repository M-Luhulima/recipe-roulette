import React from 'react';
import { AppDispatch, RootState, useRecipeDispatch, useRecipeSelector } from '../store/store';


const Recipes: React.FC = () => {
    const dispatch: AppDispatch = useRecipeDispatch()
  const { recipes } = useRecipeSelector((state: RootState) => state.recipes);

  return (
    <section className="recipes">
        {recipes[0] && recipes[0].title ? JSON.stringify(recipes[0].title) : ''}
      {!Array.isArray(recipes) ? '' : recipes.map((r: any) => (
        <React.Fragment key={r.id}>
          <h6 className="recipes__name">{r.name}</h6>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Recipes;