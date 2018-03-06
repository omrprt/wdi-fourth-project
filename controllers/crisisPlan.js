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
    .findById(req.params.id)
    .exec()
    .then(plan => {
      if(!plan) return res.notFound();
      res.status(200).json(plan);
    })
    .catch(next);
}

function createSign(req, res, next) {
  req.body.createdBy = req.currentUser;
  CrisisPlan
    .findById(req.params.id)
    .then((plan) => {
      if(!plan) return res.notFound();
      const newSign = req.body.newSign;
      plan.signs.push(newSign);
      return plan.save();
    })
    .then(plan => res.status(200).json(plan))
    .catch(next);
}

function createStrategy(req, res, next) {
  req.body.createdBy = req.currentUser;
  CrisisPlan
    .findById(req.params.id)
    .then((plan) => {
      if(!plan) return res.notFound();
      const newStrategy = req.body.newStrategy;
      plan.strategies.push(newStrategy);
      return plan.save();
    })
    .then(plan => res.status(200).json(plan))
    .catch(next);
}


module.exports = {
  getAnyPlan: getAnyPlan,
  getSpecificPlan: getSpecificPlan,
  createSign: createSign,
  createStrategy: createStrategy
};
