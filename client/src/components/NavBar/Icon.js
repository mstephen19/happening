import React from 'react';
import './icon.css';

export default function Icon({ animated, onClick }) {
  return (
    <div
      style={{
        margin: '20px',
        width: '30px',
        height: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
      }}
      onClick={() => {
        onClick();
      }}
    >
      <div
        className={`bar middle-bar ${animated && 'top-bar-animated'}`}
        style={{ width: '100%', height: '4px', background: 'white' }}
      ></div>
      <div
        className={`bar middle-bar ${animated && 'middle-bar-animated'}`}
        style={{ width: '100%', height: '4px', background: 'white' }}
      ></div>
      <div
        className={`bar bottom-bar ${animated && 'bottom-bar-animated'}`}
        style={{ width: '100%', height: '4px', background: 'white' }}
      ></div>
    </div>
  );
}
