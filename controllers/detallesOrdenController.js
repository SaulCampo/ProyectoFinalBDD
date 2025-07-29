const DetalleOrden = require('../models/DetalleOrden');

// ✅ Obtener todos los detalles
const obtenerDetalles = async (req, res) => {
  try {
    const detalles = await DetalleOrden.find().populate('producto orden');
    res.status(200).json(detalles);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener detalles', detalle: error.message });
  }
};

// ✅ Obtener detalle por ID
const obtenerDetallePorId = async (req, res) => {
  try {
    const detalle = await DetalleOrden.findById(req.params.id).populate('producto orden');
    if (!detalle) return res.status(404).json({ mensaje: 'Detalle no encontrado' });
    res.status(200).json(detalle);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener detalle', detalle: error.message });
  }
};

// ✅ Crear nuevo detalle de orden
const crearDetalle = async (req, res) => {
  const { orden, producto, cantidad, precioUnitario } = req.body;
  if (!orden || !producto || !cantidad || !precioUnitario) {
    return res.status(400).json({ mensaje: 'Datos incompletos para crear detalle' });
  }

  try {
    const nuevoDetalle = new DetalleOrden({ orden, producto, cantidad, precioUnitario });
    await nuevoDetalle.save();
    res.status(201).json(nuevoDetalle);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear detalle', detalle: error.message });
  }
};

// ✅ Actualizar detalle
const actualizarDetalle = async (req, res) => {
  try {
    const detalleActualizado = await DetalleOrden.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!detalleActualizado) return res.status(404).json({ mensaje: 'Detalle no encontrado' });
    res.status(200).json(detalleActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar detalle', detalle: error.message });
  }
};

// ✅ Eliminar detalle
const eliminarDetalle = async (req, res) => {
  try {
    const detalleEliminado = await DetalleOrden.findByIdAndDelete(req.params.id);
    if (!detalleEliminado) return res.status(404).json({ mensaje: 'Detalle no encontrado' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar detalle', detalle: error.message });
  }
};

module.exports = {
  obtenerDetalles,
  obtenerDetallePorId,
  crearDetalle,
  actualizarDetalle,
  eliminarDetalle
};
