const db = require('../config/connection');
const {User, Event} = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  const users = await User.insertMany([
    {
      email: 'email1@happening.com',
      username: 'test1',
      password: 'password1234',
      creation_date: new Date.now(),
    },
  ]);

  console.log('users seeded');

  await Event.deleteMany();

  const events = await Event.insertMany([
    {
      creator: users[0]._id,
      name: 'San Francisco Zoo & Gardens',
      body: 'The San Francisco Zoo is designed with the underlying belief that nature-focused interaction leads to conservation action. Learning about animals here inspires visitors to care for all wildlife.',
      creation_date: new Date.now(),
      location: 'San Francisco Bay Area',
      address: 'Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132',
      attending: [users[0]._id],
    },
  ]);

  console.log('events seeded');

  process.exit();
});
