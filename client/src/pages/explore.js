import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/App.css';

function Explore() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('/api/movie/popular')
            .then((response) => setMovies(response.data.results))
            .catch((error) => console.error(error))
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Letterboxd</h1>
            <Link to="pages/register">Ir para Registro</Link>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {movies.map((movie) => (
                    <div key={movie.id} style={{ margin: '10px' }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            style={{ width: '150px', height: '225px' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Explore;