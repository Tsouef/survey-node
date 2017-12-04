module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.Status(403).send({ error: 'Not enough credits!' });
  }

  next();
};
