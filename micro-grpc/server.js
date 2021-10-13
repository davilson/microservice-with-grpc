const grpc = require("@grpc/grpc-js");
const productService = require('./handlers/product/grpc.service');

const server = new grpc.Server();

server.addService(productService.service, productService.implementation);

function bootstrap() {
  server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log(`Microservice gRPC listening at 127.0.0.1:${port}`);
      server.start();
    }
  );
}

bootstrap();
