const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  overview, products,  qa,reviews
} = require('../config/services.js');

const router = Router();

router.use(overview.api, createProxyMiddleware({ target: overview.url, changeOrigin: true }));
router.use(products.api, createProxyMiddleware({ target: products.url, changeOrigin: true }));
router.use(qa.api, createProxyMiddleware({ target: qa.url, changeOrigin: true }));
router.use(reviews.api, createProxyMiddleware({ target: reviews.url, changeOrigin: true }));


module.exports = router;
