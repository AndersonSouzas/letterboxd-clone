const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
const users = []; //Simulação de bando de dados

//Registrar usuário
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.status(201).send('Usuário registrado com sucesso!');
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email);
    if (!user) return res.status(404).send('Usuário não encontrado');

    const isPassWordwordValid = await bcrypt.compare(password, user.password);
    if (!isPassWordwordValid) return res.status(401).send('Senha incorreta')

    const token = jwt.sign({ email }, 'segredo', { expireIn: '1h'});
    res.json({ token });
});

module.exports = router;
