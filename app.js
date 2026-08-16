const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const env = process.env.APP_ENV || "local";

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello from DevOps Lab",
    environment: env,
    version: "1.0.2"
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port} in ${env} mode`);
});
