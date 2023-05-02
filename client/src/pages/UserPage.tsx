// import React from "react";
// import { Link } from "react-router-dom";
// import AuthDetails from "../components/auth/authDetails";
// // import FavRecipes from "../components/favRecipes";

// const UserPage = () => {
//   return (
//     <div>
//       <h1>Welcome to the User Page</h1>
//       <button className="startQuiz-btn">
//         <Link to="/quiz">Start quiz</Link>
//       </button>
//       <button className="getRandom-btn">
//         <Link to="/results">Get random recipe</Link>
//       </button>
//       <button className="favorites-btn">
//         <Link to="/favorites">Favorites</Link>
//       </button>
//       <AuthDetails />
//       {/* <FavRecipes /> */}
//     </div>
//   );
// };

// export default UserPage;

import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipeRandom } from "../store/reducers/recipesReducer";
import { AppDispatch, useRecipeDispatch } from "../store/store";
import FavRecipes from "../components/favRecipes";
import AuthDetails from "../components/auth/authDetails";

const UserPage: FC = () => {
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

  return (
    <div className="UserPage">
      <h1>Hungry??</h1>
      <div className="btn-container">
        <button className="startQuiz-btn" onClick={handleStart}>
          Start quiz
        </button>
        <button className="getRandom-btn" onClick={handleRandom}>
          Get random recipe
        </button>
        <br></br>
        <FavRecipes />
        <br></br>
        <AuthDetails />
        <br></br>
      </div>
      </div>
)
};

export default UserPage;
