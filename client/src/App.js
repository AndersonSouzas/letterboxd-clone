import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './explore';
import Register from './register';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;