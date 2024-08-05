export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
      if (err.code === 11000) { 
          res.status(409).json({ success: false, message: 'Duplicate key error' }); 
      } else {
          res.status(err.statusCode || 500).json({ success: false, message: err.message || 'Internal Server Error' });
      }
  });
};
