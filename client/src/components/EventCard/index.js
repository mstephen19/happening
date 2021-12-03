import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {
  Card,
  CardContent,
  Button,
  Typography,
  CardHeader,
  Avatar,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { ADD_TO_MY_EVENTS} from '../../utils/redux/actions';


function EventCard(event) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    _id,
    creator,
    name,
    body,
    creation_date,
    location,
    address,
    latitude,
    logitude,
    attending,
  } = event;

  const { eventsAttending } = state;

  const attendEvent = () => {
    const eventToAttend = eventsAttending.find((event) => event._id === _id);
    if (eventToAttend) {
      // event already added
    } else {
      dispatch({
        type: ADD_TO_MY_EVENTS,
        event: { ...event }
      })
    }
  }

  return (
    <Card sx={{maxWidth: 700}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: red[500]}} arial-label="event">
            {creator}
          </Avatar>
        }
        title={name}
        subheader={location}
      />
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EventCard;
