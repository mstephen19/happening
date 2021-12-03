import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

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
    <div>
      
    </div>
  );
}
