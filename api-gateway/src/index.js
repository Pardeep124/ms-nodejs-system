const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));

// Proxy to Auth Service
app.use('/auth', createProxyMiddleware({
    target: 'http://localhost:5001',
    changeOrigin: true,
    pathRewrite: { '^/auth': '' }
}));

// Proxy to User Service
app.use('/users', createProxyMiddleware({
    target: 'http://localhost:5002',
    changeOrigin: true,
    pathRewrite: { '^/users': '' }
}));

app.listen(PORT, () => {
    console.log(`API Gateway running at http://localhost:${PORT}`);
});