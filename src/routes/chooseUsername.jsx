import AuthProvider from "../components/authProvider";
import { useNavigate } from "react-router-dom";

export default function ChooseUsername() {
  const navigate = useNavigate();
 function onUserLoggedIn(user) {
    navigate("/dashboard");
  }
  function onUserNotLoggedin() {
    navigate("/login");
  }
  function onUserNotRegister(user) {
    //console.log("User is not registered");
  }


  return (

    <div className="App">
      <header className="App-header">
      <h1>Choose UserName</h1>
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