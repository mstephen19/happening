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
  CardActions,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { ADD_TO_MY_EVENTS} from '../../utils/redux/actions';
import { idbPromise } from '../../utils/helpers';


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
      idbPromise('attending-events', 'put', { ...event });
    }
  }

  const peopleAttending = () => {
    let people = '';
    attending.forEach(element => {
      people += `${element}, `
    });
    return people;
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
        <Typography sx={{fontSize: 14}} color="text.primary">
          {body}
        </Typography>
        <Typography sx={{fontSize: 12}} color="text.secondary">
          {address}
        </Typography>
        <Typography sx={{fontSize: 12}} color="text.secondary">
          {peopleAttending}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={attendEvent}>Attend Event</Button>
        <Typography sx={{ fontSize: 10 }} color="text.secondary">
          {creation_date}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default EventCard;
