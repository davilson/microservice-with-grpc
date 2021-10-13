const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(`${__dirname}/product.proto`, options);

const ProductClient = grpc.loadPackageDefinition(packageDefinition).ProductService;

const client = new ProductClient("127.0.0.1:50051", grpc.credentials.createInsecure());

module.exports = client;
