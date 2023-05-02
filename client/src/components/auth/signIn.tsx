import { signInWithEmailAndPassword, Auth } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../services/firebase";
import GoogleSignIn from "./googleSignIn";
import SignUp from "./signUp";
import "./signIn.css";

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
    <div className="modal-container">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <h1>Sign In</h1>
        <GoogleSignIn onClose={onClose} />
        <div className="or-separator">- Or with email and password -</div>
        <form onSubmit={signIn}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          ></input>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          ></input>
          <button type="submit" className="button">
            Sign In
          </button>
        </form>
        <div className="signup-container">
          <p>Don't have an account yet?</p>
          <button className="signUp-btn" onClick={toggleSignUp}>
            Sign up
          </button>
          {showSignUp && <SignUp onClose={onClose} />}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
