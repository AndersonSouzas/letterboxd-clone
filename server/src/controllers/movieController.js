const axios = require('axios');
require('dotenv').config();

const TMDB_API_KEY = process.env.TMDB_API_KEY

const getPopularMovies = async (req, res) => {
    try {
        console.log('TMDB_API_KEY')
        console.log('Buscando filmes populares da API TMDB...');
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: TMDB_API_KEY,
                language: 'pt-BR',
            },
        });

        if (response.data.results && response.data.results.length > 0) {
            res.json(response.data);
        } else {
            res.status(404).json({ error: 'Não foram encontrados filmes populares.'})
        }
    } catch (error) {
        console.error('Erro ao buscar filmes:', error.response?.data || error.message);

        if (error.response) {
            res.status(error.response.status).json({ error: error.response.data.status_message || 'Erro desconhecido' });
        } else if (error.request) {
            res.status(500).json({ error: 'Erro na requisição, sem resposta da API.'})
        } else {
            res.status(500).json({ error: 'Erro ao buscar filmes populares.' });
        }
    }
};

module.exports = {
    getPopularMovies,
};