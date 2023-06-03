// isAdminMiddleware.js
const isAdminMiddleware = (req, res, next) => {
    // Check if the user is an admin
    // Replace this with your own logic to determine if the user is an admin
    const isAdmin = req.user.is_admin === 'admin';
  
    // If the user is not an admin, send an error response
    if (!isAdmin) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
  
    // If the user is an admin, proceed to the next middleware or route handler
    next();
  };
  
  module.exports = isAdminMiddleware;
  