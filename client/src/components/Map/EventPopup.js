import React from 'react';
import {Link} from 'react-router-dom';

export default function EventPopup({event}) {
  return (
    <Link to={`/event/${event._id}`} style={{textDecoration: 'none'}}>
      <div style={{height: '200px', width: '200px'}}>
        <h4>{event.title}</h4>
        <p>{event.creator.username}</p>
        <div style={{background: 'grey', width: '100%', height: '1px'}}></div>
        <p>{`${event.body.substring(0, 100)}...`}</p>
      </div>
    </Link>
  );
}
