import axios from 'axios';

const API_KEY = '13c75ebcd6b21fab0ec30d7bf1fadc90';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'pt-BR',
    },
});

export default api;