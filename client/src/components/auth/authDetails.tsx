import type { User } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
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
    <div>
      {authUser ? (
        <>
          <p>{`Signed In`}</p><button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
