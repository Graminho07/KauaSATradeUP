const express = require('express');
const { registerUser } = require('../src/functions/registerUser.cjs');
const { loginUser } = require('../src/functions/loginUser.cjs');
const router = express.Router();

router.post('/Cadastro', registerUser);
router.post('/', loginUser)

module.exports = router;