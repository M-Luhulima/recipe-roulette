import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../services/firebase";
// import "./signUp.css";
// import "../../styles/styles.css";


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

        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="signup-popup">
      <article className="signup-popup__content">
        <span className="signup-popup__close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={signUp} className="signup-popup__form">
          <h1 className="signup-popup__title">Create Account</h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-popup__input"
          ></input>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-popup__input"
          ></input>
          <button type="submit" className="signup-popup__signup-button">
            Sign up
          </button>
        </form>
      </article>
    </section>
  );
};

export default SignUp;
