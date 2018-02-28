const User = require('../models/user');

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      res.json(user);
    })
    .catch(next);
}

function usersUpdate(req, res, next) {
  User
    .findByIdAndUpdate(req.params.id, {
      $push: { myProfessionals: req.body }
    }, {
      new: true})
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      res.json(user);
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  show: usersShow,
  update: usersUpdate
};
