const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log(`[Gateway] ${req.method} ${req.originalUrl}`);
    next();
});

// Proxy to Auth Service
app.use('/api/auth', createProxyMiddleware({
    target: 'http://localhost:5001/api/auth',
    changeOrigin: true,
    onError: (err, req, res) => {
        console.error('Auth service proxy error:', err.message);
        res.status(500).json({ error: 'Proxy error', detail: err.message });
    }
}));

// Proxy to User Service
app.use('/api/users', createProxyMiddleware({
    target: 'http://localhost:5002/api/users',
    changeOrigin: true,
    onError: (err, req, res) => {
        console.error('User service proxy error:', err.message);
        res.status(500).json({ error: 'Proxy error', detail: err.message });
    }
}));

app.listen(PORT, () => {
    console.log(`API Gateway running at http://localhost:${PORT}`);
});
