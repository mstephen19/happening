import {Paper} from '@mui/material';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import EventList from '../components/EventList';
import Auth from '../utils/auth';
import {SET_USER} from '../utils/redux/actions';

export default function Dashboard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {email, username, _id} = Auth.getProfile().data;

  // const [user, setUser] = useState({
  //   _id,
  //   username,
  //   email,
  // });

  
  dispatch({
    type: SET_USER,
    user: {_id, username, email},
  });

  console.log(state);
  useEffect(() => {
    if (!state.user) {
     
    }
    
  }, []);

  // console.log(state);

  return <EventList />;
}
