const db = require('../config/connection');
const {User, Event} = require('../models');
const {Types} = require('mongoose');

db.once('open', async () => {
  await Event.deleteMany();

  const events = await Event.insertMany([
    {
      name: 'San Francisco Zoo & Gardens',
      body: 'The San Francisco Zoo is designed with the underlying belief that nature-focused interaction leads to conservation action. Learning about animals here inspires visitors to care for all wildlife.',
      location: 'San Francisco Bay Area',
      address: 'Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132',
    },
  ]);

  console.log('events seeded');

  await User.deleteMany();

  await User.create([
    {
      email: 'email1@happening.com',
      username: 'test1',
      password: 'Password1234$',
      events: [Types.ObjectId(events[0]._id)],
    },
    {
      email: 'email2@happening.com',
      username: 'test2',
      password: 'Password1234#',
      events: [Types.ObjectId(events[0]._id)],
    }
  ]);

  console.log('users seeded');

  process.exit();
});
