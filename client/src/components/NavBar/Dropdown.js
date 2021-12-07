import React from 'react';
// import './dropdown.css';
import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';

export default function DropDown({ position, onClick }) {
  const links = [
    {
      name: 'Main',
      route: '/',
    },
    {
      name: 'Dashboard',
      route: '/dashboard',
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        background: '#121212',
        height: 'calc(100vh - 75px)',
        position: 'absolute',
        bottom: position === 'down' ? 'calc(-100vh + 75px)' : '100vh',
        pointerEvents: position === 'down' ? 'all' : 'none',
        transition: 'all 0.3s linear',
        zIndex: '999999999999999999999',
        scrollBehavior: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ul
        style={{
          color: 'white',
          listStyle: 'none',
          fontSize: '2rem',
          width: '100%',
          margin: '0',
          padding: '0',
          textAlign: 'center',
        }}
      >
        {links.map((link) => {
          return (
            <Link to={link.route} onClick={onClick} key={uuid()}>
              <li>{link.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
