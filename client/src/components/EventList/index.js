import React, {Component, useEffect, useState} from 'react';
import EventCard from '../EventCard';
import {useLazyQuery, useQuery} from '@apollo/client';
import {useSelector, useDispatch} from 'react-redux';
import {GET_EVENTS_CREATED_BY_USER} from '../../utils/queries';
import {UPDATE_EVENTS} from '../../utils/redux/actions';
import {idbPromise} from '../../utils/helpers';
import {Box} from '@mui/system';
import {CircularProgress} from '@mui/material';

function EventList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [makeQuery, {loading, data}] = useLazyQuery(GET_EVENTS_CREATED_BY_USER);

  useEffect(() => {
    console.log(state.events);

    (async () => {
      await makeQuery();
      await console.log(data);
      dispatch({
        type: UPDATE_EVENTS,
        events: {data},
      });
    })();
  }, [state.user]);

  return (
    
    <Box sx={{mt: 1}}>
      <h2>My Events:</h2>
      {data?.eventsByUser ? (
        <Box display="flex" flexDirection="column" bgcolor="background.paper">
          {data.eventsByUser.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </Box>
      ) : (
        <h3>You haven't created any events yet!</h3>
      )}
      {loading ? (
        <Box sx={{display: 'flex'}}>
          <CircularProgress />
        </Box>
      ) : null}
    </Box>
  );
}

export default EventList;
