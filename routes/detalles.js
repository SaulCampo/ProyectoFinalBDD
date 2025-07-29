const express = require('express');
const router = express.Router();
const {
  obtenerDetalles,
  obtenerDetallePorId,
  crearDetalle,
  actualizarDetalle,
  eliminarDetalle
} = require('../controllers/detallesController');

/**
 * @swagger
 * /api/detalles:
 *   get:
 *     summary: Obtener todos los detalles
 *     responses:
 *       200:
 *         description: Lista de detalles
 */
router.get('/', obtenerDetalles);

/**
 * @swagger
 * /api/detalles/{id}:
 *   get:
 *     summary: Obtener detalle por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalle encontrado
 */
router.get('/:id', obtenerDetallePorId);

/**
 * @swagger
 * /api/detalles:
 *   post:
 *     summary: Crear nuevo detalle
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ordenId, productoId, cantidad]
 *             properties:
 *               ordenId:
 *                 type: string
 *               productoId:
 *                 type: string
 *               cantidad:
 *                 type: number
 *     responses:
 *       201:
 *         description: Detalle creado
 */
router.post('/', crearDetalle);

/**
 * @swagger
 * /api/detalles/{id}:
 *   put:
 *     summary: Actualizar detalle por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ordenId:
 *                 type: string
 *               productoId:
 *                 type: string
 *               cantidad:
 *                 type: number
 *     responses:
 *       200:
 *         description: Detalle actualizado
 */
router.put('/:id', actualizarDetalle);

/**
 * @swagger
 * /api/detalles/{id}:
 *   delete:
 *     summary: Eliminar detalle por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Detalle eliminado
 */
router.delete('/:id', eliminarDetalle);

module.exports = router;
