// import React from "react";
// import { Link } from "react-router-dom";
// import AuthDetails from "../components/auth/authDetails";
// // import FavRecipes from "../components/favRecipes";

// const UserPage = () => {
//   return (
//     <div>
//       <h1>Welcome to the User Page</h1>
//       <button className="homepage-startquiz-button">
//         <Link to="/quiz">Start quiz</Link>
//       </button>
//       <button className="homepage-getrandom-button">
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
    <div className="userpage">
      <h1>Hungry??</h1>
      <div className="homepage-buttons-container">
        <button className="homepage-startquiz-button" onClick={handleStart}>
          Start quiz
        </button>
        <button className="homepage-getrandom-button" onClick={handleRandom}>
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
