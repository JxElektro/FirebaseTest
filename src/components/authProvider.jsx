import { auth, userExists } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import {
 /* GoogleAuthProvider,*/
  onAuthStateChanged,
  /*signInWithPopup,*/
} from "firebase/auth";
import { useEffect, useState } from "react";

export default function AuthProvider({ children, onUserLoggedIn , onUserNotLoggedin , onUserNotRegister}) {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [state, setCurrentState] = useState(0);
  
  useEffect(() => {
     onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isRegistered = await userExists(user.uid);
        if (isRegistered) {
          onUserLoggedIn(user);
          console.log("Logged in CS2");
        }
        if (!isRegistered) {
          onUserNotRegister(user);
          console.log("User is not registered CS3 " + user.uid);
        } else {
          onUserNotLoggedin();
          console.log("User is signed out CS4");
        }
      }
    });
  }, [navigate , state , currentUser, setCurrentUser, setCurrentState , onUserLoggedIn , onUserNotLoggedin , onUserNotRegister]);
  return (
    <div>{children}</div>
  );
}

