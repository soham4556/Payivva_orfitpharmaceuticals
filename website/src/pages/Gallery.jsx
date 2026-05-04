import React from 'react';

const Gallery = () => {
  const galleryImages = [
    { id: 2, title: "Orfizyme Syrup", cat: "Herbal" },
    { id: 30, title: "Kneematrix Plus", cat: "Joint Care" },
    { id: 4, title: "Aha Gold Softgels", cat: "Antioxidant" },
    { id: 10, title: "Bhimcal-Max K27", cat: "Calcium" },
    { id: 14, title: "Femurso-300", cat: "Hepatobiliary" },
    { id: 13, title: "Ocedezacort", cat: "Allergy" },
    { id: 9, title: "Orficef-CV 200", cat: "Antibiotic" },
    { id: 8, title: "Kulkast-M", cat: "Respiratory" },
    { id: 22, title: "Orfi-OZ", cat: "Infection" }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <span className="category-tag">Visual Portfolio</span>
          <h2 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '1rem' }}>Our Gallery</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
            A showcase of our high-quality pharmaceutical packaging and clinical formulations.
          </p>
        </div>
        
        <div className="product-grid">
          {galleryImages.map((img) => (
            <div key={img.id} className="glass-card" style={{ padding: '1rem', overflow: 'hidden' }}>
              <div style={{ height: '300px', background: '#fff', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={`/products/${img.id}.jpg`} 
                  alt={img.title} 
                  style={{ maxHeight: '80%', maxWidth: '80%', objectFit: 'contain', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  onError={(e) => { e.target.src = '/pharma_quality.png'; }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.15) rotate(5deg)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0)'}
                />
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--primary)', color: 'white', padding: '5px 12px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: '800' }}>
                  {img.cat}
                </div>
              </div>
              <div style={{ padding: '1.5rem 0.5rem 0.5rem', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.1rem' }}>{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
