import React from 'react';
import { Box, Button } from 'rebass';

export default function NavBar({
  loggedIn,
  onLogOut,
  onLogIn,
  onCreateAccount,
}) {
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
          <Button variant='secondary' mr={2} onClick={onLogOut}>
            Log Out
          </Button>{' '}
        </>
      ) : (
        <>
          <Button variant='primary' mr={2} onClick={onLogIn}>
            Log in
          </Button>
          <Button variant='secondary' mr={2} onClick={onCreateAccount}>
            Create Account
          </Button>
        </>
      )}
    </Box>
  );
}
