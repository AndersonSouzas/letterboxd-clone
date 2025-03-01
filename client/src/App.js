import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Films from './pages/films';
import Profile from './pages/profile';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/Films" element={<Films />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;