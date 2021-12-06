import React from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarList from './SidebarList';

export default function Sidebar({ text, children }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: '200px',
        height: '100%',
        minHeight: '400px',
        right: '0',
        bottom: '0',
        background: 'grey',
        zIndex: '99',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 0 20px black',
        overflowY: 'scroll',
      }}
    >
      <SidebarHeader text={text} />
      <SidebarList>{children}</SidebarList>
    </div>
  );
}
