const Diary = require('../models/diary');

function createDiary(req, res, next) {
  req.body.createdBy = req.currentUser;

  Diary
    .create(req.body)
    .then((diary) => res.status(201).json(diary))
    .catch(next);
}

module.exports = {
  create: createDiary
};
