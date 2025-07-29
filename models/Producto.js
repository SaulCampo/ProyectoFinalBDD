/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - nombre
 *         - precio
 *         - categoria
 *       properties:
 *         nombre:
 *           type: string
 *         precio:
 *           type: number
 *         categoria:
 *           type: string
 */

const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true, min: 0 },
  categoria: { type: String, required: true }
});

module.exports = mongoose.model('Producto', productoSchema);