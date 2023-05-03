import { GoogleAuthProvider, signInWithPopup, Auth } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../services/firebase";
// import "./signIn.css";
// import "../../styles/styles.css";

interface GoogleSignInProps {
  onClose: () => void;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({ onClose }) => {
  const handleGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((userCredential) => {
        console.log(userCredential);
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button onClick={handleGoogle} className="google-signin">
      Sign In with Google
    </button>
  );
};

export default GoogleSignIn;
