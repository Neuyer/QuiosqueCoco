const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = {
    verify(req, res, next) {
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ auth: false, message: 'Sem token.' });

        // decoded é o resultado do jwt.verify
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) return res.status(403).send({ auth: false, message: 'falha ao autenticar o token.' });

            req.admId = decoded.id;
            next();
        });

    }
}