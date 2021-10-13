const express = require('express');
const cors = require('cors');

const productHandler = require('./handlers/product/handler');

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
const port = 9000;

app.get('/products', async (req, res) => {
  const products = await productHandler.fetch();
  res.json(products);
});

app.post('/products', async (req, res) => {
  const product = await productHandler.create(req.body);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Microservice REST listening at http://localhost:${port}`);
});
