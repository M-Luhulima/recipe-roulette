import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipeRandom } from "../store/reducers/recipesReducer";
import { AppDispatch, useRecipeDispatch } from "../store/store";
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";
import "../App.css";
import AuthDetails from "../components/auth/authDetails";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useRecipeDispatch();
  const handleStart = () => {
    navigate(`/quiz`);
  };

  const handleRandom = async () => {
    console.log("newRecipe: ");
    dispatch(getRecipeRandom());
    navigate(`/results`);
  };

  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
  };

  const handleSignUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);

  const handleSignInClose = () => {
    setIsSignInOpen(false);
  };

  const handleSignInOpen = () => {
    setIsSignInOpen(true);
  };

  return (
    <div className="HomePage">
      <h1>Hungry??</h1>
      <button className="startQuiz-btn" onClick={handleStart}>
        Start quiz
      </button>
      <button className="getRandom-btn" onClick={handleRandom}>
        Get random recipe
      </button>

      <div className="signin-container">
        <button className="logIn-btn" onClick={handleSignInOpen}>
          Log In
        </button>
        {isSignInOpen && <SignIn onClose={handleSignInClose} />}
        <div className="signup-container">
          <p>Don't have an account yet?</p>
          <button className="signUp-btn" onClick={handleSignUpOpen}>
            Sign up
          </button>
        </div>
        <AuthDetails />
      </div>
      {isSignUpOpen && <SignUp onClose={handleSignUpClose} />}
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
