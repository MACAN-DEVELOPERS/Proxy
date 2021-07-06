const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const router = require("./server/router");
var cors = require("cors");
const PUBLIC_DIR = path.resolve(__dirname, "public");
const app = express();
app.use(cors());

app.use(
  "/overview",
  createProxyMiddleware({
    target: "https://deploy-overview.herokuapp.com/",
    changeOrigin: true,
  })
);
app.use(
  "/products",
  createProxyMiddleware({
    target: "https://macan-app.herokuapp.com/",
    changeOrigin: true,
  })
);
app.use(
  "/qa",
  createProxyMiddleware({
    target: "https://deploying-app-questions.herokuapp.com/",
    changeOrigin: true,
  })
);
app.use(
  "/reviews",
  createProxyMiddleware({
    target: "https://ratingreviews.herokuapp.com/",
    changeOrigin: true,
  })
);
app.use(morgan("dev"));
app.use(express.static(PUBLIC_DIR));
// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use("/1", router.bundles);
// // Handling AJAX requests to the API by passing off requests to the api router
app.use("/api", router.api);

app.listen(3000);
module.exports = app;
