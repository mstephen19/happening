import React, { useState } from 'react';
import { Box, Button } from 'rebass';
import '../../styles/navbar.css';
import Icon from './Icon';
import DropDown from './Dropdown';

export default function NavBar({
  loggedIn,
  onLogOut,
  onLogIn,
  onCreateAccount,
  onEventModal,
}) {
  const [dropdown, toggleDropdown] = useState(false);

  const handleClick = () => {
    toggleDropdown(!dropdown);
    console.log(dropdown);
  };
  return (
    <Box
      style={{
        height: '75px',
        width: '100vw',
        position: 'sticky',
        top: '0',
        right: '0',
        background: '#303134',
        boxShadow: '0 0 20px black',
        display: 'flex',
        alignItems: 'center',
        zIndex: '900',
      }}
    >
      {loggedIn ? (
        <>
          <Button className='navBtn' mr={2} onClick={onLogOut}>
            Log Out
          </Button>
          <Button className='navBtn' mr={2} onClick={onEventModal}>
            Create Event
          </Button>
        </>
      ) : (
        <>
          <Button className='navBtn' mr={2} onClick={onLogIn}>
            Log in
          </Button>
          <Button className='navBtn' mr={2} onClick={onCreateAccount}>
            Create Account
          </Button>
          
        </>
        
      )}
      <Icon onClick={handleClick} animated={dropdown ? true : false} />
      <DropDown position={dropdown ? 'down' : 'up'} onClick={handleClick} />
      <h2 style={{color: 'white'}}>Happening</h2>
      

    </Box>
  );
}
