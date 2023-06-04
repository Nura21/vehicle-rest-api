// middlewares/validationMiddleware.js
const { body, validationResult } = require('express-validator');

const validatePricelist = [
  body('year_id')
    .trim()
    .notEmpty()
    .withMessage('Year ID is required'),
  body('model_id')
    .trim()
    .notEmpty()
    .withMessage('Model ID is required'),
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),
  body('price')
    .trim()
    .notEmpty()
    .withMessage('Price is required'),
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required'),
  body('code')
    .trim()
    .notEmpty()
    .withMessage('Code is required'),
  body('varian')
    .trim()
    .notEmpty()
    .withMessage('Varian is required'),
  body('discount')
    .trim()
    .notEmpty()
    .withMessage('Discount is required'),    
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        errors: errors.array() 
      });
    }

    next();
  },
];

module.exports = { validatePricelist };
