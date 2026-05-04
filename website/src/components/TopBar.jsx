import React from 'react';

const TopBar = () => {
  return (
    <div style={{ 
      background: 'var(--primary)', 
      color: 'white', 
      fontSize: '0.75rem', 
      height: '35px', 
      display: 'flex', 
      alignItems: 'center', 
      width: '100%',
      position: 'relative',
      zIndex: 1002,
      fontWeight: '600',
      letterSpacing: '0.5px'
    }}>
      <div className="container flex justify-between items-center" style={{ width: '100%' }}>
        <div className="flex gap-1 items-center">
          <span>📞 06124545656</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>9213972363</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="hide-mobile">✉️ info@orfitpharmaceuticals.in</span>
          <span style={{ background: 'var(--secondary)', color: 'var(--primary)', padding: '2px 10px', borderRadius: '4px', fontWeight: '800' }}>ISO 9001:2015</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .hide-mobile { display: none; }
        }
      `}</style>
    </div>
  );
};

export default TopBar;
