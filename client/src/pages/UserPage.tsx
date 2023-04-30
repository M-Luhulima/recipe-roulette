import React from "react";
import { Link } from "react-router-dom";
import AuthDetails from "../components/auth/authDetails";

const UserPage = () => {
  return (
    <div>
      <h1>Welcome to the User Page</h1>
      <button className="startQuiz-btn">
        <Link to="/quiz">Start quiz</Link>
      </button>
      <button className="getRandom-btn">
        <Link to="/results">Get random recipe</Link>
      </button>
      <button className="favorites-btn">
        <Link to="/favorites">Favorites</Link>
      </button>
      <AuthDetails />
    </div>
  );
};

export default UserPage;
