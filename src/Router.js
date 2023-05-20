const express = require('express');
const router = express.Router();
const login = require('./Controllers/login');
const cadastro = require('./Controllers/cadastro');

router.get('/login', (req, res) => {   
    login.login(req.body.nome, res);
});
router.post('/cadastro', (req, res) => {   
    cadastro.cadastro(req.body, res);
});


module.exports = router;
