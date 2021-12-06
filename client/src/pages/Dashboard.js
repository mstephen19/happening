import {useQuery} from '@apollo/client';
import {Paper} from '@mui/material';
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
    dispatch({
      type: SET_USER,
      user: {_id, username, email},
    });
  }, []);

  // console.log(state);

  return <EventList />;
}
