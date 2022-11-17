import { auth } from "../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LoginView() {
  /* This funciton is called when the user clicks the login button and it will create a object of the GoogleAuthProvider
  and is assigned to the provider variable and then will await the signInWithGoogle function to be called and pass the provider*/
    async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

  /* This function will take the provider object and pass it to the signInWithPopup function and then await the result*/
  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
