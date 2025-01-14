require('dotenv').config();

if (!process.env.TMDB_API_KEY) {
    console.error('Erro: TMDB_API_KEY não está definida no arquivo .env');
    process.exit(1);
}