import { auth, userExists } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";

export default function LoginView() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  /* State 0: Not logged in
    State 1 : Loading
    State 2 : Logged in
    State 3 : Logging Withouth registering
    State 4 : Noobody logged in */
  const [state, setCurrentState] = useState(0);

  /* Detects if the user is logged in or not */
  useEffect(() => {
    setCurrentUser(1);
    console.log("Checking if user is logged in CS1 + " + state);
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        const isRegistered = await userExists(user.uid);
        if (isRegistered) {
          setCurrentState(2);
          // Todo: Navigate to Dashboard
          navigate("/dashboard");
          console.log("Logged in CS2");
        }
        if (!isRegistered) {
          // Todo: Navigate to choose Username
          setCurrentState(3);
          navigate("/choose-username");
          console.log(user.displayName + " is not registered CS3" );
        } else {
          setCurrentState(4);
          console.log("User is signed out CS4");
          console.log(currentUser);
        }
      }
    });
  }, [navigate , state , currentUser]);
  /* Handles the user state change */

  
    

  
  /* This funciton is called when the user clicks the login button and it will create a object of the GoogleAuthProvider
  and is assigned to the provider variable and then will await the signInWithGoogle function to be called and pass the provider*/
  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
    /* This function will take the provider object and pass it to the signInWithPopup function and then await the result*/
    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
  /* Loading Que se imprime con */
  if (setCurrentState === 1) {
    console.log("Loading ...  State 1");
    return (
      <div className="App">
        <header className="App-header">
          <h1>Loading...</h1>
        </header>
      </div>
    );
  }
  if (state === 3) {
    console.log("No registrado State 3");
    return (
      <div className="App">
        <header className="App-header">
          <h1>Not registered</h1>
        </header>
      </div>
    );
  }
  if (state === 4) {
    console.log("No user logged in State 4");
    return (
      <div className="App">
      <div>
        <button onClick={handleOnClick}>Login</button>
      </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>LoginView</h1>
        <button onClick={handleOnClick}>Google</button>
        <a href="/LoginView">Login</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/dashboard/profile">Edit Profile</a>
        <a href="/signout">Sign Out</a>
        <a href="/u/username">Public Profile</a>
        <a href="/choose-username">Choose Username</a>
      </header>
    </div>
  );
}
