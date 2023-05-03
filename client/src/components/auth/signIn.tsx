import { signInWithEmailAndPassword, Auth } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../services/firebase";
import GoogleSignIn from "./googleSignIn";
import SignUp from "./signUp";
// import "./signIn.css";
// import "../../styles/styles.css";

interface SignInProps {
  onClose: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth as Auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <section className="signin-popup">
  <article className="signin-popup__content">
    <button className="signin-popup__close-button" onClick={onClose}>
      &times;
    </button>
    <h1 className="signin-popup__title">Sign In</h1>
    <GoogleSignIn onClose={onClose} />
    <article className="signin-popup__separator">- Or with email and password -</article>
    <form onSubmit={signIn} className="signin-popup__form">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="signin-popup__input"
      ></input>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="signin-popup__input"
      ></input>
      <button type="submit" className="signin-popup__signin-button">
        Sign In
      </button>
    </form>
    <article className="signin-popup__signup-container">
      <p className="signin-popup__signup-message">Don't have an account yet?</p>
      <button className="signin-popup__signup-button" onClick={toggleSignUp}>
        Sign up
      </button>
      {showSignUp && <SignUp onClose={onClose} />}
    </article>
  </article>
</section>

  );
};

export default SignIn;
