const express = require('express');
const { signup, login, validateToken } = require('../controllers/auth.controller');
const verifyToken = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/validate', verifyToken, validateToken);

module.exports = router;
