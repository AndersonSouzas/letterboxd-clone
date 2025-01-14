import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ textAlign: 'center'}}>
        <h1>Letterboxd</h1>
        <p>Navegar:</p>
        <Link to="/login">Ir para Login</Link>
        <br />
        <Link to="/profile">Ir para Perfil</Link>
        <br />
        <Link to="/register">Ir para Registrar</Link>       
        <br />
        <Link to="/explore">Ir para Explorar</Link>
        </div>
    );
}

export default Home;