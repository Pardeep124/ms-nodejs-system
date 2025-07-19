const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.route.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[Auth Service] ${req.method} ${req.originalUrl}`);
    next();
});

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
    })
    .catch(err => console.error('MongoDB connection error:', err));
