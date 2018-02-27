const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: 'Please your first name' },
  lastName: { type: String, required: 'Please include last Name' },
  username: { type: String, required: true, unique: 'Please enter a different Username' },
  email: { type: String, required: true, unique: 'Please enter a different email.' },
  password: { type: String, required: true },
  myProfessionals: [{
    Name: {type: String},
    profession: {type: String},
    phoneNumber: {type: String}
  }],
  mySupports: [{
    Name: {type: String},
    relationship: {type: String},
    phoneNumber: {type: String}
  }],
  thoughtDiary: [ {thoughtDiaryEntrySchema} ],
  myCrisisPlan: { type: mongoose.Schema.ObjectId, ref: 'crisisPlan'}
});

const thoughtDiaryEntrySchema = new mongoose.Schema({
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

thoughtDiaryEntrySchema.methods.belongsTo = function logBelongsTo(user) {
  return this.createdBy.id === user.id;
};

userSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
    delete json.password;
  }
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
