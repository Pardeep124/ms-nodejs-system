const axios = require('axios');
const axiosRetry = require('axios-retry').default;
const CircuitBreaker = require('opossum');

const axiosInstance = axios.create({
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosRetry(axiosInstance, {
    retries: 3,
    retryDelay: (retryCount) => {
        console.log(`Retrying request... attempt #${retryCount}`);
        return retryCount * 1000;
    },
    retryCondition: (error) => {
        return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.code === 'ECONNABORTED';
    },
});

const http = (config) => {
    const fireRequest = () => axiosInstance(config);

    const breaker = new CircuitBreaker(fireRequest, {
        timeout: 5000,
        errorThresholdPercentage: 50,
        resetTimeout: 10000
    });

    breaker.fallback(() => {
        console.warn('Circuit breaker fallback triggered');
        throw new Error('Service unavailable');
    });

    return breaker.fire();
};

module.exports = http;
