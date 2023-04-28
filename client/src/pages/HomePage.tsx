import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipeRandom } from "../store/reducers/recipesReducer";
import { AppDispatch, useRecipeDispatch } from "../store/store";
// import getRandomRecipe from "../"
// import TaskDetails from "../components/TaskDetails";
// import { useTasksContext } from "../hooks/useTasksContext";

// interface HomePageProps {
//   handleStart: () => void;
//   handleRandom: () => void;
// }

const HomePage: FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useRecipeDispatch()
  const handleStart = () => {
    navigate(`/quiz`);
  }

  const handleRandom = async () => {
    // const newRecipe = await getRandomRecipe();
    console.log('newRecipe: '); //, newRecipe);
    // setRandomRecipe(newRecipe);
    dispatch(getRecipeRandom());
    navigate(`/results`);
  };

  return (
    <div className="HomePage">
      <h1>Hungry??</h1>
        <button className="button HomePage__button" onClick={handleStart}>
          Start quiz
        </button>
        <button className="button HomePage__button" onClick={handleRandom}>
          Get random recipe
        </button>
      <div>
      </div>
    </div>
  );
};

export default HomePage;








// interface Recipe {
//   id: number;
//   name: string;
//   ingredients: string[];
//   instructions: string;
// }

// const App = () => {
//   const [recipe, setRecipe] = useState<Recipe | null>(null);

//   const handleClick = async () => {
//     const response = await fetch("https://example.com/api/recipes/random");
//     const data = await response.json();
//     setRecipe({
//       id: data.id,
//       name: data.name,
//       ingredients: data.ingredients,
//       instructions: data.instructions,
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Get Random Recipe</button>
//       {recipe && (
//         <div>
//           <h2>{recipe.name}</h2>
//           <ul>
//             {recipe.ingredients.map((ingredient) => (
//               <li key={ingredient}>{ingredient}</li>
//             ))}
//           </ul>
//           <p>{recipe.instructions}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
