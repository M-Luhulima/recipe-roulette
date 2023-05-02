import { FC } from "react";

const FavRecipes: FC = () => {
  return (
  <section className="favorites">
    <h2 className="favorites__title">Favorite Recipes</h2>
  </section>
);
};

export default FavRecipes

// interface FavoriteRecipesProps {
//   favoriteRecipes: { id: string; recipe: string }[];
//   handleDeleteRecipe: (recipeToDelete: { id: string; recipe: string }) => void;
//   handleGetFavoriteRecipes: () => void;
// }

// // add: clear list (useState)
// // for delete: check useState?

// const FavRecipes: FC<FavoriteRecipesProps> = ({
//   favoriteRecipes,
//   handleDeleteRecipe,
//   handleGetFavoriteRecipes,
// }) => {
//   const [toggledRecipeId, setToggledRecipeId] = useState<string | null>(null);

//   const handleToggleRecipe = (recipeId: string) => {
//     setToggledRecipeId(recipeId === toggledRecipeId ? null : recipeId);
//   };

//   return (
//     <section className="favorites">
//       <h2 className="favorites__title">Favorite Recipes</h2>
//       <button
//         className="favorites__button button"
//         onClick={handleGetFavoriteRecipes}
//       >
//         Get Favorite Recipes
//       </button>
//       <ul className="favorites__list">
//         {/* iterate through favorite recipes and render an li for each recipe */}
//         {favoriteRecipes.map((recipe) => (
//           <li key={recipe.id} className="favorites__item">
//             <div onClick={() => handleToggleRecipe(recipe.id)}>{recipe.recipe}</div>
//             {/* delete doesn't work yet */}
//             {/* show delete button on toggle */}
//             {recipe.id === toggledRecipeId && (
//               <button
//                 className="favorites__delete button"
//                 onClick={() => handleDeleteRecipe(recipe)}
//               >
//                 Delete
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default FavRecipes
