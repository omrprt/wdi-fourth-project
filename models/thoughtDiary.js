const mongoose = require('mongoose');

const thoughtDiary = new mongoose.Schema({
  situation: {type: String},
  feeling: {type: String, required: true},
  moodRating: {type: Number, required: true},
  thought: {type: String, required: true},
  evidenceFor: {type: String, required: true},
  evidenceAgainst: {type: String, required: true},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

thoughtDiary.methods.belongsTo = function logBelongsTo(user) {
  return this.createdBy.id === user.id;
};

module.exports = mongoose.model('Diary', thoughtDiary);
