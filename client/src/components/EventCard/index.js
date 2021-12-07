import React, {Component} from 'react';
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
import {REMOVE_EVENT} from '../../utils/redux/actions';
import {idbPromise} from '../../utils/helpers';
import {useMutation} from '@apollo/client';
import {DELETE_EVENT} from '../../utils/mutations';

const EventCard = ({event}) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state);
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
    const {data} = await eventToDelete({variables: {id: _id}});
    console.log(state);
    dispatch({
      type: REMOVE_EVENT,
      event: {...event},
    });
  };

  const peopleAttending = () => {
    let people = '';
    if (!attending.length) return people;
    attending.forEach((element) => {
      people += `${element}, `;
    });
    return people;
  };

  return (
    <Link to={`/event/${_id}`} style={{textDecoration: 'none'}}>
      <Card sx={{maxWidth: 700}}>
        <CardHeader
          avatar={
            <Avatar sx={{bgcolor: red[500]}} arial-label="event">
              {state.user.username.substring(0,1).toUpperCase()}
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
            {peopleAttending()}
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
    </Link>
  );
};

export default EventCard;
