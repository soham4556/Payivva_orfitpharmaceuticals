import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Premium Hero Section */}
      <header className="hero-section" style={{ 
        position: 'relative', 
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #001f3f 0%, #003366 100%)',
        padding: '120px 0 100px'
      }}>
        {/* Animated Background Elements */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'var(--secondary)', borderRadius: '50%', opacity: 0.1, filter: 'blur(100px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'var(--accent)', borderRadius: '50%', opacity: 0.1, filter: 'blur(80px)' }}></div>

        <div className="container">
          <div className="hero-content fade-in" style={{ position: 'relative', zIndex: 2 }}>
            <span className="badge" style={{ background: 'var(--secondary)', color: 'white', padding: '6px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '800', marginBottom: '1.5rem', display: 'inline-block' }}>
              RELIABLE PHARMACEUTICAL EXCELLENCE
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'white', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              Next-Gen Healthcare <br /><span style={{ color: 'var(--secondary)' }}>For a Healthier Tomorrow.</span>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', maxWidth: '750px' }}>
              ORFIT PHARMACEUTICALS is dedicated to redefining global healthcare standards 
              with research-driven solutions that ensure quality medicine for every home.
            </p>
            <div className="flex gap-1" style={{ flexWrap: 'wrap' }}>
              <Link to="/products" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem', background: 'var(--secondary)', color: 'var(--primary)' }}>
                Browse Shop 🛒
              </Link>
              <Link to="/about" className="btn" style={{ padding: '1.2rem 2.5rem', border: '2px solid white', color: 'white' }}>
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section style={{ background: 'white', padding: '50px 0', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div className="product-grid" style={{ gap: '2rem' }}>
            <div className="text-center">
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>10+</h2>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Years of Experience</p>
            </div>
            <div className="text-center">
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>29+</h2>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Medical Formulations</p>
            </div>
            <div className="text-center">
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>100%</h2>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Quality Assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="flex justify-between items-end" style={{ marginBottom: '4rem' }}>
            <div>
              <span className="category-tag">Most Trusted</span>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Featured Products</h2>
            </div>
            <Link to="/products" style={{ color: 'var(--secondary)', fontWeight: '800', textDecoration: 'none' }}>
              Explore Full Catalog →
            </Link>
          </div>
          
          <div className="product-grid">
            {[30, 28, 4].map(id => (
              <div key={id} className="product-card glass-card">
                <img src={`/products/${id}.jpg`} alt="Product" style={{ height: '220px', objectFit: 'contain', marginBottom: '1.5rem', width: '100%' }} onError={(e) => { e.target.src = '/pharma_quality.png'; }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                  {id === 30 ? "KNEEMATRIX PLUS" : id === 28 ? "MUCH-24" : "AHA-GOLD"}
                </h3>
                <Link to="/products" className="btn btn-primary" style={{ width: '100%' }}>Buy Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div className="fade-in">
              <span className="category-tag">Scientific Excellence</span>
              <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Leading Innovation in Pharma.</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                Our state-of-the-art research labs and expert scientists work tirelessly to develop 
                medicines that are not only effective but also affordable for everyone.
              </p>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {['WHO-GMP Standards', 'Expert R&D Team', 'Ethical Manufacturing'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>✓</span>
                    <span style={{ fontWeight: '700', color: 'var(--primary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="/pharma_quality.png" alt="Innovation" style={{ width: '100%', borderRadius: '30px', boxShadow: 'var(--shadow-lg)' }} />
              <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--secondary)', color: 'white', padding: '1rem', borderRadius: '15px', fontWeight: '800' }}>ISO CERTIFIED</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
