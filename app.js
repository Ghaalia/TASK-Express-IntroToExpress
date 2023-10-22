const express = require("express");
const products = require("./products");

const app = express();

app.listen(8000, () => {
  console.log("App is running on port 8000");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});
