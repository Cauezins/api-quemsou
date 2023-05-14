const express = require('express');
const router = express.Router();
const login = require('./Controllers/login');

router.get('/', (req, res) => {  
    
    login.login(req.body.email, req.body.senha, res);

});


module.exports = router;
