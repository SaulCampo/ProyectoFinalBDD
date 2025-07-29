const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API REST de Gestión de Negocio',
      version: '1.0.0',
      description: 'Documentación Swagger para Clientes, Productos, Órdenes y Detalles',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
  },
apis: [
  './routes/clientes.js',
  './routes/productos.js',
  './routes/ordenes.js',
  './routes/detalles.js',
  './models/*.js'
],
};

const specs = swaggerJSDoc(options);
module.exports = specs;
