const express = require('express');
const User = require('../models/User');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email });
        if (!user) return res.status(404).send('Usuário não encontradol');
        res.json(user);
    } catch (error) {
        res.status(500).send('Erro ao obter perfil do usuário')
    }
});

router.put('/', authenticateToken, async (req, res) => {
    try {
        const { username, bio, avatar } = req.body;
        const user = await User.findOneAndUpdate(
            { email: req.user.email },
            { username, bio, avatar },
            { new: true }
        );
        if (!user) return res.status(404).send('Usuário não encontrado');
        res.json(user);
    } catch (error) {
        res.status(500).send('Erro ao atualizar perfil');
    }
});

module.exports = router;