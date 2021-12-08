import React from 'react';

export default function SidebarList({children}) {
  return (
    <div
      style={{ display: 'flex', width: '100%', contain: 'content', flexDirection: 'column', alignItems: 'center' }}
    >
      {children}
    </div>
  );
}
