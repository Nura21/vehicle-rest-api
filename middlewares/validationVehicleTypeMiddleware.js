// middlewares/validationMiddleware.js
const { body, validationResult } = require('express-validator');

const validateVehicleType = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),
  body('brand_id')
    .trim()
    .notEmpty()
    .withMessage('Brand ID is required'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

module.exports = { validateVehicleType };
