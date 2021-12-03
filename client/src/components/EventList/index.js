import React, {useEffect} from 'react';
import EventCard from '../EventCard';
import {useLazyQuery, useQuery} from '@apollo/client';
import {useSelector, useDispatch} from 'react-redux';
import {GET_EVENTS_CREATED_BY_USER} from '../../utils/queries';
import { UPDATE_EVENTS } from '../../utils/redux/actions';
import { idbPromise } from '../../utils/helpers';

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
  const dispatch = useDispatch();

  const { loading, data } = useQuery(GET_EVENTS_CREATED_BY_USER);


  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_EVENTS,
        attendingEvents: data.attendingEvents,
      });
      data.attendingEvents.forEach(event => {
        idbPromise('attending-events', 'put', event);
      });
    }
    else if (!loading) {
      idbPromise('attending-events', 'get').then((events) => {
        dispatch({
          type: UPDATE_EVENTS,
          attendingEvents: events
        })
      })
    }
  }, [data, loading, dispatch]);

  const eventsList = events;

  return <EventCard event={events[0]} />;
}

export default EventList;
