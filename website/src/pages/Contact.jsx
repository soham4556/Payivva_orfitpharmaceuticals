import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #001f3f 100%)', color: 'white', textAlign: 'center', padding: '100px 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Contact Our Offices</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>
            We are available at multiple locations to serve you better. Reach out to our Head Office or Branch Office for any inquiries.
          </p>
        </div>
      </section>

      <section className="section" style={{ marginTop: '-80px' }}>
        <div className="container">
          <div className="about-grid">
            {/* Contact Form Container */}
            <div className="glass-card" style={{ padding: '3rem', background: 'white', borderRadius: '30px', boxShadow: 'var(--shadow-lg)' }}>
              <h2 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Send Us a Message</h2>
              <form style={{ display: 'grid', gap: '1.5rem' }}>
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="flex flex-col">
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-muted)' }}>FIRST NAME</label>
                    <input type="text" placeholder="John" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
                  </div>
                  <div className="flex flex-col">
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-muted)' }}>LAST NAME</label>
                    <input type="text" placeholder="Doe" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-muted)' }}>EMAIL ADDRESS</label>
                  <input type="email" placeholder="john@example.com" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none' }} />
                </div>
                <div className="flex flex-col">
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-muted)' }}>MESSAGE</label>
                  <textarea placeholder="How can we help you?" rows="5" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', resize: 'none' }}></textarea>
                </div>
                <button className="btn btn-primary" style={{ padding: '1.2rem', fontSize: '1rem', borderRadius: '15px' }}>Send Message 🚀</button>
              </form>
            </div>

            {/* Offices Info Container */}
            <div className="flex flex-col gap-2">
              {/* Head Office */}
              <div className="glass-card" style={{ padding: '2rem', background: 'white', borderLeft: '8px solid var(--secondary)' }}>
                <span className="category-tag">HEAD OFFICE</span>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Orfit Pharmaceuticals Pvt. Ltd</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.6' }}>
                  KH. NO.- 23/18, 2nd Floor, <br />
                  Surender Colony Village J, <br />
                  Burari, North Delhi-110084
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p style={{ fontWeight: '600', color: 'var(--primary)' }}>📞 9213972363 | 9911461363</p>
                  <p style={{ fontWeight: '600', color: 'var(--primary)' }}>✉️ info@orfitpharmaceuticals.in</p>
                </div>
              </div>

              {/* Branch Office */}
              <div className="glass-card" style={{ padding: '2rem', background: 'white', borderLeft: '8px solid var(--primary)' }}>
                <span className="category-tag" style={{ color: 'var(--primary)' }}>BRANCH OFFICE</span>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Orfit Pharmaceuticals Pvt. Ltd</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.6' }}>
                  3rd Floor, Kailash Complex, <br />
                  Near Usha Oxygen Plant, <br />
                  70 Feet, Bypass Road, Patna-800002
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p style={{ fontWeight: '600', color: 'var(--primary)' }}>📞 06124545656 | 06123501409</p>
                </div>
              </div>

              {/* Embedded Map */}
              <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '10px solid white', height: '300px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6167407928624!2d85.1213241!3d25.584414700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590021fe10e3%3A0xeb71c0f47bd7f287!2sORFIT%20PHARMACEUTICALS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1777902685836!5m2!1sen!2sin" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
