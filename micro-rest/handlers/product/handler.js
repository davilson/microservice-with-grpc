const productMicroservice = require('./grpc.client');

const fetch = () => new Promise((resolve, reject) => {
  productMicroservice.list({}, (error, response) => {
    if (error) {
      console.log(error)
      reject(Error("Ocorreu um erro ao acessar o micro serviço!"));
    }
    resolve(response.products);
  });
});

const create = (body) => new Promise((resolve, reject) => {
  productMicroservice.create(body, (error, response) => {
    if (error) {
      console.log(error)
      reject(Error("Ocorreu um erro ao acessar o micro serviço!"));
    }
    resolve(response);
  });
});

module.exports = {
  fetch,
  create
}
