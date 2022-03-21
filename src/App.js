import React from 'react';
import { BrowserRouter as Router, Routes, Redirect, Route } from 'react-router-dom';
import Home from './pages/home/containers/Home';
import Form from './pages/login/containers/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-up' element={<Form/>}/>
      </Routes>
    </Router>
  );
}

export default App;
