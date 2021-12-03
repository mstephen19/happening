import React from 'react';

export default function Sidebar({ children }) {
  return (
    <div
      style={{
        position: 'fixed',
        width: '200px',
        height: '100%',
        minHeight: '400px',
        right: '0',
        bottom: '0',
        background: 'red',
        zIndex: '99999',
      }}
    >
      {children}
    </div>
  );
}
