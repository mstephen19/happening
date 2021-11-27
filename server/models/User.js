const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Bad email provided'],
  },
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    validate: [({ length }) => length >= 2, 'Username too short.'],
  },
  password: {
    type: String,
    required: true,
    // Validation is done within pre hooks
  },
  creation_date: {
    type: Date,
    default: Date.now,
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
});

UserSchema.pre('save', async function (next) {
  try {
    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (!this.password.match(regex)) {
      return next(new Error('Password failed validation'));
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  try {
    if (!this._update.password) return next();

    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (!this._update.password.match(regex)) {
      return next(new Error('New password failed validation'));
    }

    const salt = await bcrypt.genSalt(10);
    this._update.password = await bcrypt.hash(this._update.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.checkPassword = async function (input) {
  try {
    return await bcrypt.compare(input, this.password);
  } catch (err) {
    return err;
  }
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
