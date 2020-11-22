module.exports.response = async (req, res, next) => {
  res.status(200).send(res.body);
};

module.exports.badRequest = async (req, res, errors) => {
  const message = errors ? { message: errors } : res.message;
  res.status(400);
  res.json(message);
}

module.exports.created = async (req, res, errors) => {
    res.status(201);
    res.json(res.body);
  }
