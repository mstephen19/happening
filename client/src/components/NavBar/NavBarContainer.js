import React, { useState } from 'react';
import Auth from '../../utils/auth';
import NavBar from './NavBar';
import CreateUserModal from './CreateUserModal/CreateUserModal';
import LoginModal from './LoginModal/LoginModal';

export default function NavBarContainer() {
  const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());
  const [userModalShow, setUserModalShow] = useState(false);
  const [logModalShow, setLogModalShow] = useState(false);

  const handleLogOut = () => {
    Auth.logout();
  };

  return (
    <>
      <NavBar
        loggedIn={loggedIn}
        onCreateAccount={() => setUserModalShow(true)}
        onLogIn={() => setLogModalShow(true)}
        onLogOut={handleLogOut}
      />
      <CreateUserModal
        show={userModalShow}
        onHide={() => setUserModalShow(false)}
      />
      <LoginModal show={logModalShow} onHide={() => setLogModalShow(false)} />
    </>
  );
}
