import React from 'react';
import { BrowserRouter as Router, Routes, Redirect, Route } from 'react-router-dom';
import Home from './pages/home/containers/Home';
import Form from './pages/login/containers/Form';
import Profile from './pages/profile/containers/Profile';
import SigninForm from './pages/sign-in/containers/SigninForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-up' element={<Form/>}/>
        <Route path='/sign-in' element={<SigninForm/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
