const db = require('../config/connection');
const {User, Event} = require('../models');
const {Types} = require('mongoose');

db.once('open', async () => {
  await Event.deleteMany();

  const events = await Event.insertMany([
    {
      name: 'San Francisco Zoo & Gardens',
      body: `The San Francisco Zoo is designed with the underlying belief that nature-focused interaction leads to conservation action. Learning about animals here inspires visitors to care for all wildlife.`,
      location: 'San Francisco',
      address: 'Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132',
    },
    {
      name: 'Yoga on the Labyrinth at Grace Cathedral',
      body: `Join yoga teacher Darren Main for this weekly practice surrounded by the awe-inspiring architecture of Grace Cathedral. Set to live music from world-renowned musicians, this weekly practice of yoga and meditation looks and feels like the amazing diversity of San Francisco itself.`,
      location: 'San Francisco',
      address: '1100 California Street, San Francisco, CA 94108',
    },
    {
      name: 'Mystic Universe: Immersive Art & Meditation Experience',
      body: `Explore the knowledge of ancient civilizations, see the reconstructed ancient architectural monuments and purify the 5 gross elements - earth, water, wind, fire, and ether - in your system at the Mystic Universe exhibition.`,
      location: 'Los Angeles',
      address: '1147 Palmetto Street, Los Angeles, CA 90013',
    },
    {
      name: 'Cars and Coffee Los Angeles',
      body: `Cars & Coffee Los Angeles was founded to bring together like-minded automotive, photography, and design enthusiasts. The events are very chill and welcoming to all car sorts. Our core group of regulars is composed of area locals who aren't shy about sharing the neighborhood's rich history. As always, we ask all attending to respect the location and surrounding area from excessive noise. Hope to see you soon.`,
      location: 'Los Angeles',
      address: '4730 Crystal Springs Dr., Los Angeles, CA 90027',
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
      password: 'Password1234$',
      events: [Types.ObjectId(events[2]._id)],
    },
  ]);

  console.log('users seeded');

  process.exit();
});
