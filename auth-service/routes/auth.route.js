const express = require('express');
const { signup, login, getUserById, verifyToken } = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/verify', verifyToken);
router.get('/user/:id', authMiddleware, getUserById);

module.exports = router;
