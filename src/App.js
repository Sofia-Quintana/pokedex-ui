import React from 'react';
import { BrowserRouter as Router, Routes, Redirect, Route } from 'react-router-dom';
import Home from './pages/home/containers/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
