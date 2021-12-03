import React from 'react';

export default function Loading({ text = 'Loading...' }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        color: 'black',
        transform: 'translate(-50%, -50%)',
        fontSize: '2rem',
        width: '200px',
        height: '100px',
        textAlign: 'center',
        zIndex: '999',
        background: 'white',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {text}
    </div>
  );
}
