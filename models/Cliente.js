/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         - nombre
 *         - correo
 *         - telefono
 *       properties:
 *         nombre:
 *           type: string
 *         correo:
 *           type: string
 *           format: email
 *         telefono:
 *           type: string
 */
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, match: /.+\@.+\..+/ },
  telefono: { type: String, required: true }
});

module.exports = mongoose.model('Cliente', clienteSchema);