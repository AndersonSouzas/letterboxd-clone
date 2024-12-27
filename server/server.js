const express = require('express');
const cors = require('cors');
const axios = require('axios')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const TMDB_API_KEY = process.env.TMDB_API_KEY

app.get('/api/movie/popular', async (req, res) => {
    try {
        console.log('Buscando filmes populares da API TMDB...');
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: TMDB_API_KEY,
                language: 'pt-US',
            },
        });
        console.log('Resposta da API TMDB:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar filmes:', error.response?.data || error.message);
        console.log('TMDB_API_KEY:', TMDB_API_KEY);
        res.status(500).json({ error: 'erro ao buscar filmes populares.' });
    }
});

app.get('/', (req, res) => {
    res.send('Back-end do letterboxd Clone está funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);