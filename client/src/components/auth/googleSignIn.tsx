import { GoogleAuthProvider, signInWithPopup, Auth } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../services/firebase";

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
    <div className="modal-container">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <h1>Sign In with Google</h1>
        <button onClick={handleGoogle} className="button">
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleSignIn;
