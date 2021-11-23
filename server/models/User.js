const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({});

const Event = mongoose.model('User', UserSchema);

module.exports = User;
