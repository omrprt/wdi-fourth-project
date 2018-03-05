const mongoose = require('mongoose');

const crisisPlanSchema = new mongoose.Schema({
  warningSigns: [{type: String}],
  copingStrategies: [{type: String}],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'},
  public: { type: Boolean, default: false }
}, {
  timestamps: true
});

crisisPlanSchema.methods.belongsTo = function logBelongsTo(user) {
  return this.createdBy.id === user.id;
};

module.exports = mongoose.model('CrisisPlan', crisisPlanSchema);