module.exports.response = async (req, res, next) => {
  res.body ? res.status(200).send(res.body) : res.status(200).send({'message': 'Success'});
};

module.exports.badRequest = async (req, res, errors) => {
  const message = errors ? { message: errors.errors[0].msg } : res.message;
  res.status(400);
  res.json(message);
}

module.exports.created = async (req, res, errors) => {
    res.status(201);
    res.json(res.body);
  }
