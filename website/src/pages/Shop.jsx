import React, { useState } from 'react';

const Shop = () => {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 30, name: "KNEEMATRIX PLUS", price: "₹2450", oldPrice: "₹2900", badge: "BEST SELLER" },
    { id: 28, name: "MUCH-24", price: "₹1850", oldPrice: "₹2100", badge: "POPULAR" },
    { id: 4, name: "AHA-GOLD", price: "₹2200", oldPrice: "₹2500", badge: "NEW" },
    { id: 10, name: "BHIMCAL-MAX K27", price: "₹1200", oldPrice: "₹1400", badge: "" },
    { id: 14, name: "FEMURSO-300", price: "₹3400", oldPrice: "₹3800", badge: "DISCOUNT" },
    { id: 9, name: "ORFICEF-CV 200", price: "₹950", oldPrice: "₹1100", badge: "" }
  ];

  return (
    <div className="shop-page">
      {/* Premium Shop Header */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #001f3f 0%, #003366 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Online Pharmacy.</h1>
            <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Direct access to Orfit's world-class medical formulations.</p>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem 2.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '1.5rem' }}>🛒</span>
            <div>
              <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.6 }}>YOUR CART</p>
              <h3 style={{ margin: 0, color: 'var(--secondary)' }}>{cartCount} Items</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Main Shop Grid */}
      <section className="section">
        <div className="container">
          <div className="product-grid">
            {products.map((p) => (
              <div key={p.id} className="glass-card" style={{ padding: '1.5rem', position: 'relative' }}>
                {p.badge && (
                  <div style={{ position: 'absolute', top: '15px', left: '15px', background: 'var(--secondary)', color: 'var(--primary)', padding: '5px 12px', borderRadius: '5px', fontSize: '0.65rem', fontWeight: '900', zIndex: 2 }}>{p.badge}</div>
                )}
                
                <div style={{ background: 'var(--bg-alt)', borderRadius: '15px', padding: '1.5rem', marginBottom: '1.5rem', height: '200px', display: 'flex', justifyContent: 'center' }}>
                  <img 
                    src={`/products/${p.id}.jpg`} 
                    alt={p.name} 
                    style={{ maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => { e.target.src = '/pharma_quality.png'; }}
                  />
                </div>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--primary)' }}>{p.name}</h3>
                
                <div className="flex items-center gap-1" style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary)' }}>{p.price}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>{p.oldPrice}</span>
                </div>

                <button 
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '1rem', borderRadius: '12px' }}
                  onClick={() => setCartCount(prev => prev + 1)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="section" style={{ background: 'var(--bg-alt)', borderTop: '1px solid #eee' }}>
        <div className="container">
          <div className="product-grid">
            {[
              { title: "Fast Delivery", icon: "🚚", desc: "Reliable shipping within 24-48 hours." },
              { title: "Secure Payment", icon: "💳", desc: "100% encrypted & secure transactions." },
              { title: "Health Support", icon: "📞", desc: "Expert medical guidance on call." }
            ].map(f => (
              <div key={f.title} className="flex gap-1 items-center glass-card" style={{ background: 'white' }}>
                <div style={{ fontSize: '2rem' }}>{f.icon}</div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '4px' }}>{f.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
