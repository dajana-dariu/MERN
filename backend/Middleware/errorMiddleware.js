const errorHandler = (err, req, res, next) => {
  // nëse statusCode nuk është vendosur, e bëjmë 500 (server error)
  const statusCode =
    res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    // në development tregon stack trace, në production jo
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { errorHandler };
