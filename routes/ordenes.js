const express = require('express');
const router = express.Router();
const {
  obtenerOrdenes,
  obtenerOrdenPorId,
  crearOrden,
  actualizarOrden,
  eliminarOrden
} = require('../controllers/ordenesController');

/**
 * @swagger
 * /api/ordenes:
 *   get:
 *     summary: Obtener todas las órdenes
 *     responses:
 *       200:
 *         description: Lista de órdenes
 */
router.get('/', obtenerOrdenes);

/**
 * @swagger
 * /api/ordenes/{id}:
 *   get:
 *     summary: Obtener orden por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Orden encontrada
 */
router.get('/:id', obtenerOrdenPorId);

/**
 * @swagger
 * /api/ordenes:
 *   post:
 *     summary: Crear nueva orden
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [clienteId, fecha]
 *             properties:
 *               clienteId:
 *                 type: string
 *               fecha:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Orden creada
 */
router.post('/', crearOrden);

/**
 * @swagger
 * /api/ordenes/{id}:
 *   put:
 *     summary: Actualizar orden por ID
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
 *               clienteId:
 *                 type: string
 *               fecha:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Orden actualizada
 */
router.put('/:id', actualizarOrden);

/**
 * @swagger
 * /api/ordenes/{id}:
 *   delete:
 *     summary: Eliminar orden por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Orden eliminada
 */
router.delete('/:id', eliminarOrden);

module.exports = router;
