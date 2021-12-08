import React from 'react';
import '../../styles/sidebar.css';

export default function EventCard({ title, body, creator, children }) {
  return (
    <div className='eventCard'
      style={{
        width: '80%',
        height: '150px',
        background: 'white',
        margin: '5px',
        borderRadius: '5px',
      }}
    >
      <h3 className='cardText'>{title}</h3>
      <p className='cardText'>{creator}</p>
      <div style={{ background: 'grey', width: '100%', height: '1px' }}></div>
      <p className='cardText'>{body}</p>
      {children}
    </div>
  );
}
