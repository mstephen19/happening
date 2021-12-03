import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';

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
    <Card sx={{minWidth: 350}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EventCard;