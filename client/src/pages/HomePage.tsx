import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipeRandom } from "../store/reducers/recipesReducer";
import { AppDispatch, useRecipeDispatch } from "../store/store";
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";
import GoogleSignIn from "../components/auth/googleSignIn";
import AuthDetails from "../components/auth/authDetails";
import { getAuth, Auth, onAuthStateChanged } from "firebase/auth";
import "../App.css";

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

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  useEffect(() => {
    const auth: Auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
      if (user) {
        navigate(`/userpage`);
      }
    });
    return unsubscribe;
  }, [navigate]);

  return (
    <div className="homepage">
      <h1>Hungry??</h1>
      <div className="homepage-buttons-container">
        <button className="homepage-startquiz-button" onClick={handleStart}>
          Start quiz
        </button>
        <button className="homepage-getrandom-button" onClick={handleRandom}>
          Get random recipe
        </button>
      </div>
      <div className="homepage-signin-container">
        <button className="homepage-signin-button" onClick={handleSignInOpen}>
          Sign In
        </button>
        {isSignInOpen && (
          <SignIn onClose={handleSignInClose} />
        )}

        <div className="homepage-signup-container">
          <p className="homepage-signup-text">Don't have an account yet?</p>
          <button className="homepage-signup-button" onClick={handleSignUpOpen}>
            Sign Up
          </button>
          {isSignUpOpen && <SignUp onClose={handleSignUpClose} />}
        </div>
        <AuthDetails />
      </div>
    </div>
  );
};

export default HomePage;
