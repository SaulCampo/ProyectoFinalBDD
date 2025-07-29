/**
 * @swagger
 * components:
 *   schemas:
 *     Orden:
 *       type: object
 *       required:
 *         - cliente
 *         - fecha
 *         - total
 *       properties:
 *         cliente:
 *           type: string
 *         fecha:
 *           type: string
 *           format: date
 *         total:
 *           type: number
 */

const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  fecha: { type: Date, required: true },
  total: { type: Number, required: true, min: 0 }
});

module.exports = mongoose.model('Orden', ordenSchema);