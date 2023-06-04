// middlewares/validationMiddleware.js
const { body, validationResult } = require('express-validator');

const validateVehicleModel = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),
  body('type_id')
    .trim()
    .notEmpty()
    .withMessage('Type ID is required'),
  body('karoseri')
    .trim()
    .notEmpty()
    .withMessage('Karoseri is required'),
  body('machine')
    .trim()
    .notEmpty()
    .withMessage('Machine is required'),
  body('transmission')
    .trim()
    .notEmpty()
    .withMessage('Transmission is required'),
  body('history')
    .trim()
    .notEmpty()
    .withMessage('History is required'),    
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

module.exports = { validateVehicleModel };
