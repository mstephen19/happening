import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Card, CardActions, CardContent, Button, Typography, CardHeader, Avatar } from '@mui/material';
import {red} from '@mui/material/colors'

function EventCard(event) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
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

  return (
    <Card sx={{ minWidth: 350 }}>
      <CardHeader avatar={
        <Avatar sx={{ bgcolor: red[500] }} arial-label="event">
          {creator.substring(0,1)}
        </Avatar>
      }/>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EventCard;