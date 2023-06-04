// controllers/userController.js
const bcrypt = require('bcrypt');
const { Pricelist } = require('../models/Pricelist');

const createPricelist = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingPricelist = await Pricelist.findOne({ where: { email } });
    const hashedPassword = '';
    const pricelist = '';

    if (existingPricelist) {
      return res.status(400).json({ error: 'Pricelist already exists' });
    }

    hashedPassword = await bcrypt.hash(password, 10);
    pricelist = await Pricelist.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'Pricelist created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getPricelists = async (req, res) => {
  try {
    const { name, email} = req.body;
    const whereClause = {};
    const pricelists = '';

    if(name){
      whereClause.name = name;
    }

    if(email){
      whereClause.email = email;
    }

    pricelists = await Pricelist.findAll({ where: whereClause });
    
    res.json(pricelists);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ error: 'Internal Server Error' });
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
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updatePricelist = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const pricelist = await Pricelist.findByPk(id);

    if (!pricelist) {
      return res.status(404).json({ error: 'Pricelist not found' });
    }

    pricelist.name = name;
    pricelist.email = email;

    await pricelist.save();

    res.json({ message: 'Pricelist updated successfully', pricelist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePricelist = async (req, res) => {
  try {
    const { id } = req.params;
    const pricelist = await Pricelist.findByPk(id);

    if (!pricelist) {
      return res.status(404).json({ error: 'Pricelist not found' });
    }

    await pricelist.destroy();

    res.json({ message: 'Pricelist deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createPricelist, getPricelists, getPricelistById, updatePricelist, deletePricelist };
