const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  name: {
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
  attending: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
