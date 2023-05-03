import React from 'react';
import { RootState, useQuizRecipeSelector } from '../store/store';


const QuizRecipes: React.FC = () => {
  const { recipes } = useQuizRecipeSelector((state: RootState) => state.recipes);


  return (
    <section className="quizrecipes">
        {recipes[0] && recipes[0].title ? JSON.stringify(recipes[0].title) : ''}
      {!Array.isArray(recipes) ? '' : recipes.map((r: any) => (
        <React.Fragment key={r.id}>
          <h6 className="quizrecipes__name">{r.name}</h6>
        </React.Fragment>
      ))}
    </section>
  );
};

export default QuizRecipes;