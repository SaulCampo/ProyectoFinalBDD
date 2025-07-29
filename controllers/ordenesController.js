const Orden = require('../models/Orden');

// ✅ Obtener todas las órdenes
const obtenerOrdenes = async (req, res) => {
  try {
    const ordenes = await Orden.find().populate('cliente');
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener órdenes', detalle: error.message });
  }
};

// ✅ Obtener orden por ID
const obtenerOrdenPorId = async (req, res) => {
  try {
    const orden = await Orden.findById(req.params.id).populate('cliente');
    if (!orden) return res.status(404).json({ mensaje: 'Orden no encontrada' });
    res.status(200).json(orden);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener orden', detalle: error.message });
  }
};

// ✅ Crear nueva orden
const crearOrden = async (req, res) => {
  const { cliente, fecha, total } = req.body;
  if (!cliente || !fecha || !total) {
    return res.status(400).json({ mensaje: 'Datos incompletos para crear orden' });
  }

  try {
    const nuevaOrden = new Orden({ cliente, fecha, total });
    await nuevaOrden.save();
    res.status(201).json(nuevaOrden);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear orden', detalle: error.message });
  }
};

// ✅ Actualizar orden
const actualizarOrden = async (req, res) => {
  try {
    const ordenActualizada = await Orden.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!ordenActualizada) return res.status(404).json({ mensaje: 'Orden no encontrada' });
    res.status(200).json(ordenActualizada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar orden', detalle: error.message });
  }
};

// ✅ Eliminar orden
const eliminarOrden = async (req, res) => {
  try {
    const ordenEliminada = await Orden.findByIdAndDelete(req.params.id);
    if (!ordenEliminada) return res.status(404).json({ mensaje: 'Orden no encontrada' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar orden', detalle: error.message });
  }
};

module.exports = {
  obtenerOrdenes,
  obtenerOrdenPorId,
  crearOrden,
  actualizarOrden,
  eliminarOrden
};
