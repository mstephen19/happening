import React from 'react';

export default function SidebarHeader({ text = 'Results' }) {
  return (
    <div style={{ marginTop: '75px', color: 'white', textAlign: 'center' }}>
      <h3>{text}</h3>
      <div style={{ width: '100%', height: '1px', background: 'white' }}></div>
    </div>
  );
}
