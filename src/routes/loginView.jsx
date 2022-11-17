import {auth} from '../firebase/firebase';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

export default function LoginView() {
    async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth , googleProvider);
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