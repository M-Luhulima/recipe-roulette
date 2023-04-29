import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../services/firebase";
import "./signUp.css";

interface SignUpProps {
  onClose: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onClose }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUp = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        onClose(); // Close the modal after successful sign-up
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={signUp}>
          <h1>Create Account</h1>
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
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
