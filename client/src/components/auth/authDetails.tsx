import type { User } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [authIdTokenUser, setAuthIdTokenUser] = useState<string | null>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        user.getIdToken()
          .then((token) => {
            console.log('idToken onAuthStateChanged: ', token);
            setAuthIdTokenUser(token);
          });

      } else {
        setAuthUser(null);
        setAuthIdTokenUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="auth">
      {authUser ? (
        <>
          <p className="auth__message">Signed In</p>
          <button className="auth__signout-btn" onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p className="auth__message">Signed Out</p>
      )}
    </section>

  );
};

export default AuthDetails;
