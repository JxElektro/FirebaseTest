import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginView from './routes/loginView';
import Dashboard from './routes/dashboard';
import ChooseUsername from './routes/chooseUsername';
import EditProfile from './routes/editProfile';
import PublicProfile from './routes/publicProfile';
import SingOut from './routes/signOut';

/* Importamos  */
import { BrowserRouter , Routes , Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/LoginView" element={<LoginView />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="dashboard/profile" element={<EditProfile />} />
      <Route path="signout" element={<SingOut />} />
      <Route path="u/:username" element={<PublicProfile />} />
      <Route path="choose-username" element={<ChooseUsername />} />
    </Routes>
  </BrowserRouter>
);


