const jwt = require('jsonwebtoken');
const { secretOrKey } = require('../config/config');

module.exports.login = async (req, res, next) => {
  const { username } = req.body;
  const token = jwt.sign({ id: username }, secretOrKey);
  res.body = {
    'access-token': token
  };
  next();
};
