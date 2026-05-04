import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "About", path: "/about", icon: "🏢" },
    { name: "Services", path: "/services", icon: "💊" },
    { name: "Products", path: "/products", icon: "📦" },
    { name: "Team", path: "/team", icon: "👥" },
    { name: "Gallery", path: "/gallery", icon: "🖼️" },
    { name: "Contact", path: "/contact", icon: "📞" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container justify-between flex items-center" style={{ width: '100%' }}>
        <Link to="/" style={{ height: '55px', display: 'flex', alignItems: 'center' }}>
          <img src="/logo (1).png" alt="Orfit Logo" style={{ height: '100%', objectFit: 'contain', transition: 'all 0.3s' }} />
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.path}>
              <Link to={l.path} className={`nav-link ${location.pathname === l.path ? 'active' : ''}`}>
                {l.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/products" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>
              Order Now
            </Link>
          </li>
        </ul>

        {/* Advanced Mobile Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-toggle-btn"
          style={{ 
            display: 'none', background: 'var(--primary)', border: 'none', 
            width: '45px', height: '45px', borderRadius: '12px',
            color: 'white', cursor: 'pointer', transition: 'var(--transition)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Premium Advanced Mobile Overlay */}
      <div style={{ 
        position: 'fixed', top: '0', left: '0', 
        width: '100%', height: '100vh', 
        background: 'linear-gradient(135deg, #001326 0%, #002d5b 100%)', 
        zIndex: '2000', transition: 'all 0.6s cubic-bezier(0.85, 0, 0.15, 1)', 
        opacity: isMobileMenuOpen ? 1 : 0,
        visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
        display: 'flex', flexDirection: 'column', padding: '60px 40px 100px',
        overflowY: 'auto'
      }}>
        {/* Close Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ position: 'absolute', top: '25px', right: '25px', background: 'rgba(255,255,255,0.1)', border: 'none', fontSize: '1.2rem', color: 'white', width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer' }}
        >✕</button>

        <div style={{ marginBottom: '3rem' }}>
          <img src="/logo (1).png" alt="Logo" style={{ height: '35px', filter: 'brightness(0) invert(1)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {links.map((link, index) => (
            <Link 
              key={link.path}
              to={link.path} 
              style={{ 
                fontSize: '1.6rem', fontWeight: '700', color: location.pathname === link.path ? 'var(--secondary)' : 'white', 
                textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '2px',
                display: 'flex', alignItems: 'center', gap: '15px',
                transition: 'all 0.3s',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                transitionDelay: `${index * 0.1}s`
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Bottom Contact Info */}
        <div style={{ 
          marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem',
          opacity: isMobileMenuOpen ? 1 : 0, transition: 'all 0.5s 0.8s'
        }}>
          <p style={{ color: 'var(--secondary)', fontSize: '0.8rem', fontWeight: '800', marginBottom: '10px' }}>CONTACT US</p>
          <p style={{ color: 'white', opacity: 0.7, fontSize: '0.9rem', marginBottom: '5px' }}>📞 06124545656</p>
          <p style={{ color: 'white', opacity: 0.7, fontSize: '0.9rem' }}>✉️ info@orfitpharmaceuticals.in</p>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '700' }}>LINKEDIN</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '700' }}>FACEBOOK</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .nav-links { display: none !important; }
          .mobile-toggle-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
