import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#001326', color: 'white', paddingTop: '60px', borderTop: '5px solid var(--secondary)' }}>
      <div className="container">
        <div className="product-grid" style={{ gap: '3rem' }}>
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col gap-1">
            <img src="/logo (1).png" alt="Orfit Logo" style={{ height: '50px', filter: 'brightness(0) invert(1)', objectFit: 'contain', width: 'fit-content', marginBottom: '1rem' }} />
            <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Transforming lives through innovative scientific solutions. Committed to excellence in healthcare research.
            </p>
            <div className="flex gap-1">
              <a href="#" className="footer-social-link">LinkedIn</a>
              <a href="#" className="footer-social-link">Facebook</a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col gap-1">
            <h4 style={{ color: 'var(--secondary)', fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Links</h4>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About</Link></li>
              </ul>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><Link to="/team" className="footer-link">Team</Link></li>
                <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Offices */}
          <div className="flex flex-col gap-1">
            <h4 style={{ color: 'var(--secondary)', fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Offices</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <p style={{ fontWeight: '700', fontSize: '0.8rem', color: 'var(--secondary)' }}>DELHI (HEAD)</p>
                <p style={{ opacity: 0.7, fontSize: '0.85rem' }}>Burari, North Delhi-110084</p>
                <p style={{ opacity: 0.9, fontSize: '0.85rem', fontWeight: '600' }}>📞 9213972363</p>
              </div>
              <div>
                <p style={{ fontWeight: '700', fontSize: '0.8rem', color: 'var(--secondary)' }}>PATNA (BRANCH)</p>
                <p style={{ opacity: 0.7, fontSize: '0.85rem' }}>Bypass Road, Patna-800002</p>
                <p style={{ opacity: 0.9, fontSize: '0.85rem', fontWeight: '600' }}>📞 06124545656</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ marginTop: '50px', padding: '25px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
          <p style={{ opacity: 0.4, fontSize: '0.75rem' }}>
            © 2026 Orfit Pharmaceuticals Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
