const mongoose = require('mongoose');

const connectDB = async () => {

    const mongoURI = 'mongodb://127.0.0.1:27017/letterboxd-clone';
    try {
        // Conectando ao MongoDB com opções recomendadas
        await mongoose.connect(mongoURI);
        console.log('Conexão com MongoDB estabelecida com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1); // Encerra o processo com erro caso a conexão falhe
    }
};

module.exports = connectDB;