const mongoose = require('mongoose');
const { Schema } = mongoose;
const geocodeString = require('../utils/geocode');

const EventSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  creation_date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  attending: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

EventSchema.pre('save', async function (next) {
  try {
    const { longitude, latitude } = await geocodeString(this.address);
    this.latitude = latitude;
    this.longitude = longitude;
    return next();
  } catch (err) {
    return next(err);
  }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
