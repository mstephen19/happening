import {useQuery} from '@apollo/client';
import {Grid, Paper, paperClasses} from '@mui/material';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import EventList from '../components/EventList';
import Auth from '../utils/auth';
import {SET_USER} from '../utils/redux/actions';

export default function Dashboard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const {email, username, _id} = Auth.getProfile().data;
    if (!email) {
      alert('You must be logged in to view this page');
      return;
    }
    dispatch({
      type: SET_USER,
      user: {_id, username, email},
    });
  }, []);

  // console.log(state);

  return (
    <Paper elevation={4} variant="outlined">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <EventList />
      </Grid>
    </Paper>
  );
}
