const estados = require("../utils/mexicoData.json");

module.exports = {
  getAllStateData(req, res) {
    try {
      res.status(200).json(estados);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },
  getStateData(req, res) {
    try {
      const stateId = String(req.params.stateId);
      console.log("stateId:", stateId);
      const estado = estados[stateId];
      console.log("estado:", estado);
      if (estado) {
        res.status(200).json(estado);
      } else {
        res.status(404).json({ error: "Estado no encontrado" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};
