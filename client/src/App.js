import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home'
import Explore from './pages/explore';
import Register from './pages/register';
import Login from './pages/login';
import Profile from './pages/profile';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
          <Link to="/profile" style={{ margin: '0 10px' }}>Perfil</Link>
          <Link to="/Register" style={{ margin: '0 10px' }}>Registro</Link>
          <Link to="/Explore" style={{ margin: '0 10px' }}>Explorar</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;