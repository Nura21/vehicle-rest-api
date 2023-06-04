// middlewares/validationMiddleware.js
const { body, validationResult } = require('express-validator');

const validateVehicleYear = [
  body('year')
    .trim()
    .notEmpty()
    .withMessage('Year is required'),
  body('kilometer')
    .trim()
    .notEmpty()
    .withMessage('Kilometer is required'),
  body('previous_owner')
    .trim()
    .notEmpty()
    .withMessage('Previous Owner is required'),
  body('maintenance_record')
    .trim()
    .notEmpty()
    .withMessage('Maintenance Record is required'),
  body('accident_history')
    .trim()
    .notEmpty()
    .withMessage('Accident History is required'),
  body('service_history')
    .trim()
    .notEmpty()
    .withMessage('Service History is required'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

module.exports = { validateVehicleYear };
