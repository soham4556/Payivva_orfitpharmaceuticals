import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* Premium Hero Header */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #001f3f 100%)', color: 'white', textAlign: 'center', padding: '100px 0' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', padding: '5px 15px', borderRadius: '50px', fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '1.5rem', display: 'inline-block' }}>ESTABLISHED 2013</span>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Our Legacy of Care.</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto' }}>
            Orfit Pharmaceuticals Private Limited is more than just a company; it's a commitment to health and scientific excellence.
          </p>
        </div>
      </section>

      {/* Corporate Identity Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div className="fade-in">
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Who We Are</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Incorporated on 04 April 2013, Orfit Pharmaceuticals has emerged as a beacon of quality in the Indian pharmaceutical landscape. 
                Based in Patna, Bihar, we operate as a Private Limited Company dedicated to providing high-quality, affordable healthcare solutions.
              </p>
              <div className="glass-card" style={{ background: 'var(--bg-alt)', padding: '2rem', borderLeft: '10px solid var(--secondary)' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: '600' }}>
                  "To redefine healthcare through innovation, ensuring that quality medicine reaches every corner of society."
                </p>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="/pharma_quality.png" alt="Orfit Excellence" style={{ width: '100%', borderRadius: '40px', boxShadow: 'var(--shadow-lg)' }} />
              <div style={{ position: 'absolute', bottom: '-30px', left: '20px', background: 'white', padding: '2rem', borderRadius: '25px', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--secondary)', fontSize: '2rem' }}>10+</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '800' }}>YEARS OF TRUST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Our Core Values</h2>
          </div>
          <div className="product-grid">
            {[
              { title: "Innovation", desc: "Constant research for better healing solutions.", icon: "🔬" },
              { title: "Integrity", desc: "Transparency in every pill and every partnership.", icon: "🤝" },
              { title: "Quality", desc: "Stringent quality checks at every level of production.", icon: "🏆" }
            ].map(val => (
              <div key={val.title} className="glass-card text-center">
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{val.icon}</div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{val.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ background: 'var(--primary)', color: 'white', padding: '4rem' }}>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
              <div>
                <p style={{ opacity: 0.6, fontSize: '0.8rem', fontWeight: '800' }}>REGISTRATION NO.</p>
                <h3 style={{ color: 'var(--secondary)' }}>020786</h3>
              </div>
              <div>
                <p style={{ opacity: 0.6, fontSize: '0.8rem', fontWeight: '800' }}>CLASS OF COMPANY</p>
                <h3 style={{ color: 'var(--secondary)' }}>Private Limited</h3>
              </div>
              <div>
                <p style={{ opacity: 0.6, fontSize: '0.8rem', fontWeight: '800' }}>AUTHORIZED CAPITAL</p>
                <h3 style={{ color: 'var(--secondary)' }}>₹5,00,000</h3>
              </div>
              <div>
                <p style={{ opacity: 0.6, fontSize: '0.8rem', fontWeight: '800' }}>LISTED STATUS</p>
                <h3 style={{ color: 'var(--secondary)' }}>Unlisted</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
