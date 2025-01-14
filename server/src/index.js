const connectDB = require('./config/db')
const app = require('./app');
require('./config/dotenv');

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});