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
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      user = Object.assign(user, req.body);
      return user.save();
    })
    .then((user) => res.json(user))
    .catch(next);
}

function addProfessional(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      user.myProfessionals.push(req.body);
      return user.save();
    })
    .then((user) => res.json(user))
    .catch(next);
}

function addFamilyandFriends(req, res, next) {
  console.log('in family and friend controller');
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      user.myFamilyandFriends.push(req.body);
      return user.save();
    })
    .then((user) => res.json(user))
    .catch(next);
}


module.exports = {
  show: usersShow,
  update: usersUpdate,
  addProfessional: addProfessional,
  addFamilyandFriends: addFamilyandFriends
};
