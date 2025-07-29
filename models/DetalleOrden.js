/**
 * @swagger
 * components:
 *   schemas:
 *     DetalleOrden:
 *       type: object
 *       required:
 *         - orden
 *         - producto
 *         - cantidad
 *         - precioUnitario
 *       properties:
 *         orden:
 *           type: string
 *         producto:
 *           type: string
 *         cantidad:
 *           type: number
 *         precioUnitario:
 *           type: number
 */

const mongoose = require('mongoose');

const detalleOrdenSchema = new mongoose.Schema({
  orden: { type: mongoose.Schema.Types.ObjectId, ref: 'Orden', required: true },
  producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad: { type: Number, required: true, min: 1 },
  precioUnitario: { type: Number, required: true, min: 0 }
});

module.exports = mongoose.model('DetalleOrden', detalleOrdenSchema);