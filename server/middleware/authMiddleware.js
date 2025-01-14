const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Token ausente');

    jwt.verify(token, 'segredo', (err, user) => {
        if (err) return res.status(403).send('Token inválido');
        res.user = user;
        next()
    });
}

module.exports = authenticateToken;