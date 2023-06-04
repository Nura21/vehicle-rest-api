const { VehicleBrand } = require('../models/VehicleBrand');

const createVehicleBrand = async (req, res) => {
  try {
    const { name } = req.body;
    const existingVehicleBrand = await VehicleBrand.findOne({ 
      where: { name } 
    });
    const vehicleBrand = '';

    if (existingVehicleBrand) {
      return res.status(400).json({ 
        error: 'Vehicle Brand already exists' 
      });
    }

    vehicleBrand = await VehicleBrand.create({ 
      name, 
    });

    res.status(201).json({ 
      message: 'Vehicle Brand created successfully', 
      vehicleBrand
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const getVehicleBrands = async (req, res) => {
  try {
    const { name } = req.body;
    const whereClause = {};
    const vehicleBrands = '';

    if(name){
      whereClause.name = name;
    }

    vehicleBrands = await VehicleBrand.findAll({ 
      where: whereClause 
    });
    
    res.json(vehicleBrands);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const getVehicleBrandById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicleBrand = await VehicleBrand.findByPk(id);

    if (!vehicleBrand) {
      return res.status(404).json({ 
        error: 'Vehicle Brand not found' 
      });
    }

    res.json(vehicleBrand);
  } catch (error) {
    console.error(error);

    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const updateVehicleBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const vehicleBrand = await VehicleBrand.findByPk(id);

    if (!vehicleBrand) {
      return res.status(404).json({ 
        error: 'Vehicle Brand not found' 
      });
    }

    vehicleBrand.name = name;
    await vehicleBrand.save();

    res.json({ 
      message: 'Vehicle Brand updated successfully', 
      vehicleBrand 
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const deleteVehicleBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicleBrand = await VehicleBrand.findByPk(id);

    if (!vehicleBrand) {
      return res.status(404).json({ 
        error: 'Vehicle Brand not found' 
      });
    }

    await vehicleBrand.destroy();

    res.json({ 
      message: 'Vehicle Brand deleted successfully' 
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

module.exports = { 
  createVehicleBrand, 
  getVehicleBrands, 
  getVehicleBrandById, 
  updateVehicleBrand, 
  deleteVehicleBrand 
};
