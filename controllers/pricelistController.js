const { Pricelist } = require('../models/Pricelist');

const createPricelist = async (req, res) => {
  try {
    const { 
      year_id, 
      model_id, 
      name, 
      price, 
      description, 
      code, 
      varian, 
      discount 
    } = req.body;
    const whereClause = {};
    const pricelist = '';

    if(year_id){
      whereClause.year_id = year_id;
    }

    if(model_id){
      whereClause.model_id = model_id;
    }
    
    const existingPricelist = await Pricelist.findOne({ 
      where:{ whereClause }
    });
    

    if (existingPricelist) {
      return res.status(400).json({ 
        error: 'Pricelist already exists' 
      });
    }

    pricelist = await Pricelist.create({ 
      year_id, 
      model_id, 
      name,
      price,
      description,
      code,
      varian,
      discount,  
    });

    res.status(201).json({ 
      message: 'Pricelist created successfully', 
      pricelist
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const getPricelists = async (req, res) => {
  try {
    const { year_id, model_id} = req.body;
    const whereClause = {};
    const pricelists = '';

    if(year_id){
      whereClause.year_id = year_id;
    }

    if(model_id){
      whereClause.model_id = model_id;
    }

    pricelists = await Pricelist.findAll({ 
      where: whereClause 
    });
    
    res.json(pricelists);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const getPricelistById = async (req, res) => {
  try {
    const { id } = req.params;
    const pricelist = await Pricelist.findByPk(id);

    if (!pricelist) {
      return res.status(404).json({ error: 'Pricelist not found' });
    }

    res.json(pricelist);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const updatePricelist = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      year_id, 
      model_id, 
      name, 
      price, 
      description, 
      code, 
      varian, 
      discount 
    } = req.body;
    const pricelist = await Pricelist.findByPk(id);

    if (!pricelist) {
      return res.status(404).json({ 
        error: 'Pricelist not found' 
      });
    }

    pricelist.year_id = year_id;
    pricelist.model_id = model_id;
    pricelist.name = name;
    pricelist.price = price;
    pricelist.description = description;
    pricelist.code = code;
    pricelist.varian = varian;
    pricelist.discount = discount;

    await pricelist.save();

    res.json({ 
      message: 'Pricelist updated successfully', 
      pricelist 
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

const deletePricelist = async (req, res) => {
  try {
    const { id } = req.params;
    const pricelist = await Pricelist.findByPk(id);

    if (!pricelist) {
      return res.status(404).json({ 
        error: 'Pricelist not found' 
      });
    }

    await pricelist.destroy();

    res.json({ 
      message: 'Pricelist deleted successfully' 
    });
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
};

module.exports = { 
  createPricelist, 
  getPricelists, 
  getPricelistById, 
  updatePricelist, 
  deletePricelist 
};
