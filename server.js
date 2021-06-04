const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const router = require('./server/router');
var cors = require("cors");
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const app = express();
app.use(cors());

app.use('/products', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));
// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/1', router.bundles);
// // Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);

app.listen(3000);
module.exports = app;
