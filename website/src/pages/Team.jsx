import React from 'react';

const Team = () => {
  const team = [
    { name: "Anu Sinha", role: "Director", bio: "Leading the strategic vision and growth of Orfit with over 15 years in pharma.", img: "https://cdn-icons-png.flaticon.com/512/149/149071.png" },
    { name: "Deepak Kumar", role: "Director", bio: "Expert in supply chain management and ensuring quality across all distributions.", img: "https://cdn-icons-png.flaticon.com/512/149/149071.png" },
    { name: "Pritam Gupta", role: "Director", bio: "Specializing in R&D and innovative clinical formulations for affordable care.", img: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }
  ];

  return (
    <div className="team-page">
      {/* Premium Header */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #001326 100%)', color: 'white', textAlign: 'center', padding: '100px 0' }}>
        <div className="container">
          <span className="category-tag" style={{ color: 'var(--secondary)' }}>Our Leadership</span>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Meet the Visionaries.</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto' }}>
            A team of dedicated professionals driven by a single mission: Better Health for Everyone.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section">
        <div className="container">
          <div className="product-grid">
            {team.map((member, idx) => (
              <div key={idx} className="glass-card text-center" style={{ padding: '3.5rem 2rem' }}>
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2.5rem' }}>
                  <div style={{ width: '180px', height: '180px', borderRadius: '40px', background: 'var(--bg-alt)', transform: 'rotate(10deg)', overflow: 'hidden', border: '2px solid var(--secondary)' }}>
                    <div style={{ transform: 'rotate(-10deg)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={member.img} alt={member.name} style={{ width: '70%', opacity: 0.4 }} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: 'var(--primary)', color: 'white', padding: '10px 20px', borderRadius: '15px', fontWeight: '800', fontSize: '0.7rem' }}>DIRECTOR</div>
                </div>
                
                <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '8px' }}>{member.name}</h3>
                <p style={{ color: 'var(--secondary)', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1.5rem' }}>{member.role}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>{member.bio}</p>
                
                <div className="flex justify-center gap-1">
                  <a href="#" style={{ background: 'var(--bg-alt)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'var(--primary)' }}>in</a>
                  <a href="#" style={{ background: 'var(--bg-alt)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'var(--primary)' }}>tw</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div className="text-center">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Join Our Growth Journey</h2>
            <p style={{ opacity: 0.7, maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
              We are always looking for passionate scientists, researchers, and marketing professionals to join our expanding team.
            </p>
            <button className="btn" style={{ border: '2px solid var(--secondary)', color: 'var(--secondary)' }}>View Careers</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
