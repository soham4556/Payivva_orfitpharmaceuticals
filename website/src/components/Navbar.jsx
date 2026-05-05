import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const location = useLocation();

  // Min swipe distance in pixels
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && !isMobileMenuOpen) {
      // Swipe from right to left -> Open
      setIsMobileMenuOpen(true);
    } else if (isRightSwipe && isMobileMenuOpen) {
      // Swipe from left to right -> Close
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    
    // Add touch listeners to the entire document for a premium feel
    document.addEventListener('touchstart', onTouchStart);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [touchStart, touchEnd, isMobileMenuOpen]);

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
        <Link to="/" style={{ height: '70px', display: 'flex', alignItems: 'center' }}>
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
            display: 'none', background: 'none', border: 'none', 
            width: '80px', height: '80px',
            cursor: 'pointer', transition: 'var(--transition)',
            padding: '0',
            outline: 'none',
            marginRight: '-15px'
          }}
        >
          {isMobileMenuOpen ? (
            <div style={{ 
              width: '65px', height: '65px', background: 'var(--primary)', 
              borderRadius: '18px', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', color: 'white', fontSize: '1.8rem' 
            }}>✕</div>
          ) : (
            <img src="/products/toggle.png" alt="Menu" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          )}
        </button>
      </div>

      {/* Premium Advanced Mobile Overlay */}
      <div style={{ 
        position: 'fixed', top: '0', right: '0', 
        width: 'min(350px, 85vw)', height: '100vh', 
        background: 'linear-gradient(135deg, #001326 0%, #002d5b 100%)', 
        zIndex: '10001', transition: 'all 0.6s cubic-bezier(0.85, 0, 0.15, 1)', 
        opacity: isMobileMenuOpen ? 1 : 0,
        visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        display: 'flex', flexDirection: 'column', padding: '80px 40px',
        overflowY: 'auto',
        boxShadow: '-10px 0 50px rgba(0,0,0,0.5)'
      }}>
        {/* Close Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ position: 'absolute', top: '25px', left: '25px', background: 'rgba(255,255,255,0.1)', border: 'none', fontSize: '1.2rem', color: 'white', width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer' }}
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
