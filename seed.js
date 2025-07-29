const mongoose = require('mongoose');
const Cliente = require('./models/Cliente');
const Producto = require('./models/Producto');
const Orden = require('./models/Orden');
const Detalle = require('./models/Detalle');

mongoose.connect('mongodb://localhost:27017/miapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function insertarDatos() {
  await Cliente.deleteMany({});
  await Producto.deleteMany({});
  await Orden.deleteMany({});
  await Detalle.deleteMany({});

  const clientes = await Cliente.insertMany([
    { nombre: 'Ana Pérez', correo: 'ana@example.com', telefono: '099111222' },
    { nombre: 'Luis Torres', correo: 'luis@example.com', telefono: '098333444' }
  ]);

  const productos = await Producto.insertMany([
    { nombre: 'Teclado', precio: 35.5, stock: 100 },
    { nombre: 'Mouse', precio: 18.0, stock: 150 }
  ]);

  const ordenes = await Orden.insertMany([
    { clienteId: clientes[0]._id, fecha: '2025-07-29' },
    { clienteId: clientes[1]._id, fecha: '2025-07-30' }
  ]);

  await Detalle.insertMany([
    { ordenId: ordenes[0]._id, productoId: productos[0]._id, cantidad: 2 },
    { ordenId: ordenes[1]._id, productoId: productos[1]._id, cantidad: 3 }
  ]);

  console.log('✅ Datos insertados correctamente');
  mongoose.connection.close();
}

insertarDatos();

