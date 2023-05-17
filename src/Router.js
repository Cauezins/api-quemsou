const express = require('express');
const router = express.Router();
const login = require('./Controllers/login');
const cadastro = require('./Controllers/cadastro');

router.get('/login', (req, res) => {   
    login.login(req.query.email, req.query.senha, res);
});
router.post('/cadastro', (req, res) => {   
    cadastro.cadastro(req.body, res);
});


module.exports = router;
