const Diary = require('../models/diary');

function createDiary(req, res, next) {
  req.body.createdBy = req.currentUser;

  Diary
    .create(req.body)
    .then((diary) => res.status(201).json(diary))
    .catch(next);
}

function showDiary(req, res, next) {
  Diary
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((diary) => {
      if(!diary) return res.notFound();

      res.json(diary);
    })
    .catch(next);
}

function deleteDiary(req, res, next) {
  Diary
    .findById(req.params.id)
    .exec()
    .then((diary) => {
      if(!diary) return res.notFound();
      return diary.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  create: createDiary,
  show: showDiary,
  delete: deleteDiary
};
