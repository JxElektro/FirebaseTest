import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";

export default function LoginView() {
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
    onAuthStateChanged(auth, handleUsertStateChange);
  }, []);

  /* Handles the user state change */
  function handleUsertStateChange(user) {
    if (user) {
      setCurrentUser(3);
      console.log("User is signed in");
    } else {
      setCurrentUser(4);
      console.log("User is signed out");
    }
  }

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
 /* No esta funcionando el loading */
    if (state === 1) {
      return <div>Loading...</div>;
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
