import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipeRandom } from "../store/reducers/recipesReducer";
import { AppDispatch, useRecipeDispatch } from "../store/store";
import FavRecipes from "../components/favRecipes";
// import AuthDetails from "../components/auth/authDetails";

const UserPage: FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useRecipeDispatch();
  const handleStart = () => {
    navigate(`/quiz`);
  };

  const handleRandom = async () => {
    console.log("newRecipe: ");
    dispatch(getRecipeRandom());
    navigate(`/random-results`);
  };

  return (
    <section className="userpage">
      <h1 className="userpage__title">What are we eating today?</h1>
      <p className="userpage__text">Click the button to get a random recipe or answer a couple of short questions to get a recipe to match your appetite!</p>
      <article className="userpage__buttons-container">
        <button className="userpage__startquiz-button" onClick={handleStart}>
          Start quiz
        </button>
        <button className="userpage__getrandom-button" onClick={handleRandom}>
          Get random recipe
        </button>
        <FavRecipes />
        {/* <AuthDetails /> */}
      </article>
    </section>
  )
};

export default UserPage;
