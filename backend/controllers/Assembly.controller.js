const Assembly = require("../models/Assembly.model");

module.exports.assemblyController = {
  createAssembly: async (req, res) => {
    const {
      processor,
      motherboard,
      cooler,
      graphics,
      ram,
      ssd,
      hdd,
      power,
      compCase,
      image,
      cost,
    } = req.body;

    try {
      const assembly = await Assembly.create({
        processor,
        motherboard,
        cooler,
        graphics,
        ram,
        ssd,
        hdd,
        power,
        compCase,
        image,
        cost,
      });
      return res.status(201).json(assembly);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  getAssembly: async (req, res) => {
    try {
      const assembly = await Assembly.findOne({ id: req.params.id });
      return res.json(assembly);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};
