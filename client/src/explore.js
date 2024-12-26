import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from './api';

function Explore() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        api.get('/movie/popular')
            .then((response) => setMovies(response.data.results))
            .catch((error) => console.error(error))
    }, []);

    return (
        <div>
            <h1>Explorar Filmes</h1>
            <Link to="/register">Ir para Registro</Link>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {movies.map((movie) => (
                    <div key={movie.id} style={{ margin: '10px' }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            style={{ width: '150px', height: '225px' }}
                        />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Explore;