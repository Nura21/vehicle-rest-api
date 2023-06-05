const { VehicleModel } = require('../models/VehicleModel');

const createVehicleModel = async (req, res) => {
  try {
    const { 
        name,
        type_id,
        karoseri,
        machine,
        transmission,
        history
     } = req.body;
    const existingVehicleModel = await VehicleModel.findOne({ 
      where: { name } 
    });
    const vehicleModel = '';

    if (existingVehicleModel) {
      return res.status(400).json({ 
        error: 'Vehicle Model already exists' 
      });
    }

    vehicleModel = await VehicleModel.create({ 
        name,
        type_id,
        karoseri,
        machine,
        transmission,
        history
    });

    res.status(201).json({ 
      message: 'Vehicle Model created successfully', 
      vehicleModel
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const getVehicleModels = async (req, res) => {
  try {
    const { name, type_id } = req.body;
    const whereClause = {};
    const vehicleModels = '';

    if(name){
      whereClause.name = name;
    }

    if(type_id){
      whereClause.type_id = type_id;
    }

    vehicleModels = await VehicleModel.findAll({ 
      where: whereClause 
    });
    
    res.json(vehicleModels);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const getVehicleModelById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicleModel = await VehicleModel.findByPk(id);

    if (!vehicleModel) {
      return res.status(404).json({ 
        error: 'Vehicle Model not found' 
      });
    }

    res.json(vehicleModel);
  } catch (error) {
    console.error(error);

    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const updateVehicleModel = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
        name,
        type_id,
        karoseri,
        machine,
        transmission,
        history 
    } = req.body;
    const vehicleModel = await VehicleModel.findByPk(id);

    if (!vehicleModel) {
      return res.status(404).json({ 
        error: 'Vehicle Model not found' 
      });
    }

    vehicleModel.name = name;
    vehicleModel.type_id = type_id;
    vehicleModel.karoseri = karoseri;
    vehicleModel.machine = machine;
    vehicleModel.transmission = transmission;
    vehicleModel.history = history;
    await vehicleModel.save();

    res.json({ 
      message: 'Vehicle Model updated successfully', 
      vehicleModel 
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const deleteVehicleModel = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicleModel = await VehicleModel.findByPk(id);

    if (!vehicleModel) {
      return res.status(404).json({ 
        error: 'Vehicle Model not found' 
      });
    }

    await vehicleModel.destroy();

    res.json({ 
      message: 'Vehicle Model deleted successfully' 
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

module.exports = { 
  createVehicleModel, 
  getVehicleModels, 
  getVehicleModelById, 
  updateVehicleModel, 
  deleteVehicleModel 
};
