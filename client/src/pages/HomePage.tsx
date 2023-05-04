import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipeRandom } from "../store/reducers/recipesReducer";
import { AppDispatch, useRecipeDispatch } from "../store/store";
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";
import AuthDetails from "../components/auth/authDetails";
import { getAuth, Auth, onAuthStateChanged } from "firebase/auth";
import "../App.css";
import logoIcon from '../../src/assets/images/logoIcon.png';

const HomePage: FC = () => {
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
    <section className="homepage">
            <img src={logoIcon} className="homepage-logo-large" alt="logoIcon" />
      <h1 className="homepage__title">What are we eating today ?</h1>
      <p className="homepage__text">Click the button to get a random recipe or answer a couple of short questions to get a recipe to match your appetite!</p>
      <article className="homepage__buttons-container">
        <button className="homepage__startquiz-button" onClick={handleStart}>
          Start quiz
        </button>
        <button className="homepage__getrandom-button" onClick={handleRandom}>
          Get random recipe
        </button>
      </article>
      <article className="homepage__signin-container">
        <button className="homepage__signin-button" onClick={handleSignInOpen}>
          Log In
        </button>
        {isSignInOpen && (
          <SignIn onClose={handleSignInClose} />
        )}
      </article>
    </section>
  );
};

export default HomePage;
