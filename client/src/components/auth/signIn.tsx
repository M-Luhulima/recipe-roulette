import { signInWithEmailAndPassword, Auth, UserCredential } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../services/firebase";
import GoogleSignIn from "./googleSignIn";
import "./signIn.css";

interface SignInProps {
  onClose: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={signIn}>
          <h1>Sign In</h1>
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
      </div>
    </div>
  );
};

export default SignIn;
