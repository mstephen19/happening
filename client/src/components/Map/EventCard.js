import React from 'react';

export default function EventCard({ title, body, creator, children }) {
  return (
    <div
      style={{
        width: '400px',
        height: '150px',
        background: 'white',
        margin: '5px',
        borderRadius: '5px',
      }}
    >
      <h3>{title}</h3>
      <p>{creator}</p>
      <div style={{ background: 'grey', width: '100%', height: '1px' }}></div>
      <p>{body}</p>
      {children}
    </div>
  );
}
