import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:5000/auth/register', { email, password });
            alert('Usuário registado com sucesso!');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Registro</h1>
            <Link to="/">Voltar para Explorar Filmes</Link>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Registrar</button>
        </div>
    )
}

export default Register;