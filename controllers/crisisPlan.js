const CrisisPlan = require('../models/myPlan');

function getAnyPlan(req, res, next) {
  CrisisPlan
    .findOne({createdBy: req.currentUser._id})
    .exec()
    .then(plan => {
      if(!plan) {
        CrisisPlan
          .create({createdBy: req.currentUser})
          .then(newPlan => {
            res.status(201).json(newPlan);
          });
      } else {
        res.status(200).json(plan);
      }
    })
    .catch(next);
}

function getSpecificPlan(req, res, next) {
  CrisisPlan
    .findById(req.paramas.id)
    .exec()
    .then(plan => {
      if(!plan) return res.notFound();
      res.status(200).json(plan);
    })
    .catch(next);
}

module.exports = {
  getAnyPlan: getAnyPlan,
  getSpecificPlan: getSpecificPlan
};
