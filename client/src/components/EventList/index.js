import React, {useState, useEffect} from 'react';
import EventCard from '../EventCard';
import {useLazyQuery} from '@apollo/client';
import {useSelector} from 'react-redux';
import {GET_EVENTS_CREATED_BY_USER} from '../../utils/queries';

const events = [
  {
    creator: 'Isaac',
    name: 'San Francisco Zoo & Gardens',
    body: `The San Francisco Zoo is designed with the underlying belief that nature-focused interaction leads to conservation action. Learning about animals here inspires visitors to care for all wildlife.`,
    location: 'San Francisco, CA, USA',
    address: 'Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132',
  },
];

function EventList() {
  const state = useSelector((state) => state);

  const [makeQuery, {loading, data, error}] = useLazyQuery(
    GET_EVENTS_CREATED_BY_USER,
    {
      variables: {user: state.user},
    }
  );

  useEffect(() => {
    makeQuery();
  }, [state]);

  const eventsList = events;

  return <EventCard event={events[0]} />;
}

export default EventList;
