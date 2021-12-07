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
import {red} from '@mui/material/colors';
import { REMOVE_EVENT} from '../../utils/redux/actions';
import {idbPromise} from '../../utils/helpers';
import {useMutation} from '@apollo/client';
import {DELETE_EVENT} from '../../utils/mutations';

function EventCard(event) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [eventToDelete, {error, loading, data}] = useMutation(DELETE_EVENT);

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

  const deleteEvent = async () => {
    
   const eventRemoved = await eventToDelete({ id: _id });

    dispatch({
      type: REMOVE_EVENT,
      event: {...event},
    });
    idbPromise('attending-events', 'delete', {_id});
  };

  const peopleAttending = () => {
    let people = '';
    attending.forEach((element) => {
      people += `${element}, `;
    });
    return people;
  };

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
        <Button size="small" color="error" onClick={deleteEvent}>
          Delete Event
        </Button>
        <Typography sx={{fontSize: 10}} color="text.secondary">
          {creation_date}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default EventCard;
