const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const thoughtDiaryEntrySchema = new mongoose.Schema({
  situation: {type: String},
  emotion: [{
    name: {type: String, required: 'Please include a name' },
    rating: {type: String}
  }],
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

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: 'Please include your first name' },
  lastName: { type: String, required: 'Please include last Name' },
  username: { type: String, required: true, unique: 'Please enter a different Username' },
  email: { type: String, required: true, unique: 'Please enter a different email.' },
  password: { type: String, required: true },
  myProfessionals: [{
    name: {type: String, required: 'Please include a name'},
    profession: {type: String, required: 'Include their profession'},
    phoneNumber: {type: String, required: 'Include their contact number'}
  }],
  myFamilyandFriends: [{
    name: {type: String, required: 'Please include a name' },
    relationship: {type: String},
    phoneNumber: {type: String}
  }],
  myOrganizations: [{
    name: {type: String, required: 'Please include a name'},
    url: {type: String},
    phoneNumber: {type: String}
  }],
  myCrisisPlan: { type: mongoose.Schema.ObjectId, ref: 'crisisPlan'}
});

userSchema.virtual('diaries', {
  ref: 'Diary',
  localField: '_id', // use the _id field from this schema
  foreignField: 'createdBy' // to match up with the createdBy field in the Post schema
});

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
  if(this.isModified('password') && (!this._passwordConfirmation || this._passwordConfirmation !== this.password)) {
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
