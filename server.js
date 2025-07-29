const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const specs = require('./config/swagger'); 

// Importar rutas
const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');
const ordenesRoutes = require('./routes/ordenes');
const detallesRoutes = require('./routes/detalles');

dotenv.config();
const app = express();
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Montar rutas
app.use('/api/clientes', clientesRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/ordenes', ordenesRoutes);
app.use('/api/detalles', detallesRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('🔌 Conectado a MongoDB'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

module.exports = app;
