import React from 'react';

const Services = () => {
  const services = [
    { title: "Prescription Services", desc: "Expert management of complex medical prescriptions with precision and safety.", icon: "📝" },
    { title: "Chronic Management", desc: "Dedicated support systems for long-term health conditions and therapy.", icon: "🏥" },
    { title: "Clinical Research", desc: "Innovative R&D focused on the next generation of affordable medicine.", icon: "🔬" },
    { title: "Medical Supplies", desc: "High-grade medical equipment and surgical supplies for healthcare facilities.", icon: "🩹" },
    { title: "Therapy Management", desc: "Optimizing therapeutic outcomes through personalized patient counseling.", icon: "🧘" },
    { title: "Immunizations", desc: "Preventive healthcare through safe and effective vaccination programs.", icon: "💉" }
  ];

  return (
    <div className="services-page">
      {/* Premium Header */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #001326 0%, var(--primary) 100%)', color: 'white', textAlign: 'center', padding: '100px 0' }}>
        <div className="container">
          <span className="category-tag" style={{ color: 'var(--secondary)' }}>Our Expertise</span>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Healthcare Solutions.</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto' }}>
            Delivering excellence across the pharmaceutical value chain, from research to direct patient care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="product-grid">
            {services.map((s, idx) => (
              <div key={idx} className="glass-card" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem', background: 'var(--bg-alt)', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {s.icon}
                </div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.4rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>{s.desc}</p>
                <div style={{ marginTop: '2rem', width: '40px', height: '4px', background: 'var(--secondary)', borderRadius: '10px' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Support Banner */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', background: 'white', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Partnering for a Healthier Society.</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                We work closely with hospitals, clinics, and medical professionals to ensure that our services 
                meet the highest global standards of safety and efficacy.
              </p>
              <button className="btn btn-primary">Partner With Us</button>
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <img src="/pharma_quality.png" alt="Partnership" style={{ width: '100%', borderRadius: '25px', boxShadow: 'var(--shadow-md)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
