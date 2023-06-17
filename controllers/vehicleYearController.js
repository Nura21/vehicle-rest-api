const { VehicleYear } = require('../models/VehicleYear');

const createVehicleYear = async (req, res) => {
  try {
    const { 
        year,
        kilometer,
        previous_owner,
        maintenance_record,
        accident_history,
        service_history
     } = req.body;
    const existingVehicleYear = await VehicleYear.findOne({ 
      where: { year, previous_owner } 
    });
    const vehicleYear = '';

    if (existingVehicleYear) {
      return res.status(400).json({ 
        error: 'Vehicle Year already exists' 
      });
    }

    vehicleYear = await VehicleYear.create({ 
      year,
      kilometer,
      previous_owner,
      maintenance_record,
      accident_history,
      service_history
    });

    res.status(201).json({ 
      message: 'Vehicle Year created successfully', 
      vehicleYear
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const getVehicleYears = async (req, res) => {
  try {
    const { 
      year,
      kilometer,
      previous_owner,
      maintenance_record,
      accident_history,
      service_history 
    } = req.body;
    const whereClause = {};
    const vehicleYears = '';

    if(year){
      whereClause.year = year;
    }

    if(kilometer){
      whereClause.kilometer = kilometer
    }

    if(previous_owner){
      whereClause.previous_owner = previous_owner
    }

    if(maintenance_record){
      whereClause.maintenance_record = maintenance_record
    }

    if(accident_history){
      whereClause.accident_history = accident_history
    }

    if(service_history){
      whereClause.service_history = service_history
    }

    vehicleYears = await VehicleYear.findAll({ 
      where: whereClause 
    });
    
    res.json(vehicleYears);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const getVehicleYearById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicleYear = await VehicleYear.findByPk(id);

    if (!vehicleYear) {
      return res.status(404).json({ 
        error: 'Vehicle Year not found' 
      });
    }

    res.json(vehicleYear);
  } catch (error) {
    console.error(error);

    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const updateVehicleYear = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      year,
      kilometer,
      previous_owner,
      maintenance_record,
      accident_history,
      service_history 
    } = req.body;
    const vehicleYear = await VehicleYear.findByPk(id);

    if (!vehicleYear) {
      return res.status(404).json({ 
        error: 'Vehicle Year not found' 
      });
    }

    vehicleYear.year = year;
    vehicleYear.kilometer = kilometer;
    vehicleYear.previous_owner = previous_owner;
    vehicleYear.maintenance_record = maintenance_record;
    vehicleYear.accident_history = accident_history;
    vehicleYear.service_history = service_history;
    await vehicleYear.save();

    res.json({ 
      message: 'Vehicle Year updated successfully', 
      vehicleYear 
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const deleteVehicleYear = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicleYear = await VehicleYear.findByPk(id);

    if (!vehicleYear) {
      return res.status(404).json({ 
        error: 'Vehicle Year not found' 
      });
    }

    await vehicleYear.destroy();

    res.json({ 
      message: 'Vehicle Year deleted successfully' 
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

module.exports = { 
  createVehicleYear, 
  getVehicleYears, 
  getVehicleYearById, 
  updateVehicleYear, 
  deleteVehicleYear 
};
