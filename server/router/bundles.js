const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const  {
  overview, products,  qa,reviews
}  = require('../config/services.js');

const router = Router();

router.use('/overview.js', createProxyMiddleware({
  target: overview.url,
  pathRewrite: {
    '^/1/overview.js': overview.bundle,
  },
  changeOrigin: true,
}));

router.use('/products.js', createProxyMiddleware({
  target: products.url,
  pathRewrite: {
    '^/1/products.js': products.bundle,
  },
  changeOrigin: true,
}));

router.use('/qa.js', createProxyMiddleware({
  target: qa.url,
  pathRewrite: {
    '^/1/qa.js': qa.bundle,
  },
  changeOrigin: true,
}));

router.use('/reviews.js', createProxyMiddleware({
  target: reviews.url,
  pathRewrite: {
    '^/1/reviews.js': reviews.bundle,
  },
  changeOrigin: true,
}));

module.exports = router;
