const { v4: uuid } = require('uuid');

const products = [
  {
    id: '7e0b1db6-4efb-46f5-8077-2a8a2b129df3',
    name: 'Camiseta Geek - Homem Aranha'
  },
  {
    id: '1f3d121d-0f33-4b09-a5ef-3b74791c90a8',
    name: 'Camiseta Geek - Homem de Ferro'
  },
  {
    id: 'c0d215b1-8829-4485-a9dd-547b83a7b955',
    name: 'Camiseta Geek - Capitã Marvel'
  },
  {
    id: 'f271f7e1-6266-44c5-8a9e-adf86490cf28',
    name: 'Camiseta Geek - Bebê Yoda'
  }
];

const fetch = () => products;

const create = (product) => {
  const newProduct = {
    ...product,
    id: uuid()
  }
  products.push(newProduct);
  return newProduct;
}

module.exports = {
  fetch,
  create
}
