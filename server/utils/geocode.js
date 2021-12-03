require('dotenv').config();
const NodeGeocoder = require('node-geocoder');


const options = {
  provider: 'mapquest',
  apiKey: process.env.MAPQUEST_API_KEY,
  formatter: null,
};

const geocoder = NodeGeocoder(options);

const geocodeString = async (string) => {
  try {const res = await geocoder.geocode(string);
  return res[0];
  }
  catch (err) {
  console.error(err);
  };
};

module.exports = geocodeString;
