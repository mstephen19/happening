import React from "react";
import EventCard from "../EventCard";



const events = [{
  creator: 'Isaac',
  name: 'San Francisco Zoo & Gardens',
  body: `The San Francisco Zoo is designed with the underlying belief that nature-focused interaction leads to conservation action. Learning about animals here inspires visitors to care for all wildlife.`,
  location: 'San Francisco, CA, USA',
  address: 'Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132',
}];

function EventList(props = events) {
  
  return <EventCard event={events[0]}/>;
}

export default EventList;