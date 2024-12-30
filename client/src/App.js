import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './pages/explore';
import Register from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/pages/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;