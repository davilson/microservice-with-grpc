const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const productHandler = require('./handler');

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = protoLoader.loadSync(`${__dirname}/product.proto`, options);
const productProto = grpc.loadPackageDefinition(packageDefinition);

module.exports = {
  service: productProto.ProductService.service,
  implementation: {
    list: (_, callback) => {
      const products = productHandler.fetch();
      callback(null, { products });
    },
    create: (call, callback) => {
      const body = call.request;
      const product = productHandler.create(body);
      callback(null, product);
    },
  }
};
