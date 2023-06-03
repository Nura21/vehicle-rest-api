// middlewares/authMiddleware.js

const isAdmin = (req, res, next) => {
  const { user } = req;

  if (user && user.isAdmin) {
    next();
  } else {
    res.status(403).json({ error: 'Access denied' });
  }
};

module.exports = { isAdmin };
