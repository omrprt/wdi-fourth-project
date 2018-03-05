const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
  title: {type: String},
  situation: {type: String},
  emotions: [{
    feeling: {type: String},
    rating: {type: Number}
  }],
  thought: {type: String, required: true},
  evidenceFor: {type: String, required: true},
  evidenceAgainst: {type: String, required: true},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

diarySchema.methods.belongsTo = function logBelongsTo(user) {
  return this.createdBy.id === user.id;
};

module.exports = mongoose.model('Diary', diarySchema);
