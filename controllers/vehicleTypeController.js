const { VehicleType } = require('../models/VehicleType');

const createVehicleType = async (req, res) => {
  try {
    const { 
        name,
        brand_id,
     } = req.body;
    const existingVehicleType = await VehicleType.findOne({ 
      where: { name, brand_id } 
    });
    const vehicleType = '';

    if (existingVehicleType) {
      return res.status(400).json({ 
        error: 'Vehicle Type already exists' 
      });
    }

    vehicleType = await VehicleType.create({ 
        name,
        brand_id,
    });

    res.status(201).json({ 
      message: 'Vehicle Type created successfully', 
      vehicleType
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const getVehicleTypes = async (req, res) => {
  try {
    const vehicleTypes = '';

    vehicleTypes = await VehicleType.findAll({ 
      where: whereClause 
    });
    
    res.json(vehicleTypes);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const getVehicleTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicleType = await VehicleType.findByPk(id);

    if (!vehicleType) {
      return res.status(404).json({ 
        error: 'Vehicle Type not found' 
      });
    }

    res.json(vehicleType);
  } catch (error) {
    console.error(error);

    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const updateVehicleType = async (req, res) => {
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
    const vehicleType = await VehicleType.findByPk(id);

    if (!vehicleType) {
      return res.status(404).json({ 
        error: 'Vehicle Type not found' 
      });
    }

    vehicleType.name = name;
    vehicleType.type_id = type_id;
    vehicleType.karoseri = karoseri;
    vehicleType.machine = machine;
    vehicleType.transmission = transmission;
    vehicleType.history = history;
    await vehicleType.save();

    res.json({ 
      message: 'Vehicle Type updated successfully', 
      vehicleType 
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const deleteVehicleType = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicleType = await VehicleType.findByPk(id);

    if (!vehicleType) {
      return res.status(404).json({ 
        error: 'Vehicle Type not found' 
      });
    }

    await vehicleType.destroy();

    res.json({ 
      message: 'Vehicle Type deleted successfully' 
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

module.exports = { 
  createVehicleType, 
  getVehicleTypes, 
  getVehicleTypeById, 
  updateVehicleType, 
  deleteVehicleType 
};
