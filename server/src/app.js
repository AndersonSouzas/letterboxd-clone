const express = require('express');
const cors = require('cors');

const movieRoutes = require('./routes/movieRoute');
const authRoutes = require('./routes/authRoute');
const profileRoutes = require('./routes/profileRoute');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

//Rotas
app.use('/api/movie/', movieRoutes);
app.use('/api', authenticateToken, movieRoutes)
app.use('/auth', authRoutes);
app.use('/profile', authenticateToken, profileRoutes);

//Rota raiz
app.get('/', (req, res) => {
    res.send("Back-end do letterboxd clone está funcionando");
});

module.exports = app;