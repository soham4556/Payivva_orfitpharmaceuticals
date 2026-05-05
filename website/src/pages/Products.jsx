import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../config';

const Products = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);


  return (
    <div className="products-page">
      {/* Header */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #001326 100%)', color: 'white', padding: '100px 0' }}>
        <div className="container flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span className="category-tag" style={{ color: 'var(--secondary)' }}>Official Catalog</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Products</h1>
            <p style={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: '600px' }}>Explore deep medical insights and order directly from Orfit.</p>
          </div>
          <div 
            className="glass-card" 
            onClick={() => navigate('/checkout')}
            style={{ 
              padding: '1.2rem 2rem', background: 'rgba(255,255,255,0.1)', border: 'none', 
              display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" style={{ height: '35px', filter: 'brightness(0) invert(1)' }} alt="cart" />
            <div>
              <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.6, fontWeight: '800' }}>CHECKOUT NOW</p>
              <h3 style={{ margin: 0, color: 'var(--secondary)', fontSize: '1.2rem' }}>{cartCount} Items</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.5rem', color: 'var(--primary)' }}>
              Loading products...
            </div>
          ) : (
            <div className="product-grid">
              {products.map((p) => (
                <div key={p.id} className="glass-card" style={{ padding: '1.5rem', position: 'relative' }}>
                {p.badge && (
                  <div style={{ position: 'absolute', top: '15px', left: '15px', background: 'var(--secondary)', color: 'var(--primary)', padding: '5px 12px', borderRadius: '5px', fontSize: '0.65rem', fontWeight: '900', zIndex: 2 }}>{p.badge}</div>
                )}
                
                <div style={{ background: 'var(--bg-alt)', borderRadius: '15px', padding: '1.5rem', marginBottom: '1.5rem', height: '220px', display: 'flex', justifyContent: 'center' }}>
                  <img 
                    src={`/products/${p.id}.jpg`} 
                    alt={p.name} 
                    style={{ maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => { e.target.src = '/pharma_quality.png'; }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--secondary)', fontWeight: '800' }}>{p.category}</span>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', margin: '5px 0' }}>{p.name}</h3>
                  <div style={{ color: '#fbbf24', fontSize: '0.8rem' }}>★★★★★ <span style={{ color: 'var(--text-muted)' }}>({p.reviews})</span></div>
                </div>
                
                <div className="flex items-center gap-1" style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary)' }}>{p.price}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>{p.oldPrice}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <button 
                    className="btn btn-primary" 
                    style={{ padding: '0.9rem', borderRadius: '12px' }}
                    onClick={() => setCartCount(prev => prev + 1)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="btn" 
                    style={{ border: '1px solid #ddd', padding: '0.9rem', borderRadius: '12px', background: 'white', color: 'var(--primary)' }}
                    onClick={() => setSelectedProduct(p)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </section>

      {/* Amazon Style Product Modal */}
      {selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="glass-card" style={{ maxWidth: '1100px', width: '100%', maxHeight: '90vh', background: 'white', padding: 0, overflowY: 'auto', position: 'relative', borderRadius: '20px' }}>
            <button onClick={() => setSelectedProduct(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--primary)', color: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}>✕</button>
            
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', padding: '40px' }}>
              {/* Left: Product Image */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'var(--bg-alt)', padding: '3rem', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={`/products/${selectedProduct.id}.jpg`} 
                    alt={selectedProduct.name} 
                    style={{ width: '100%', objectFit: 'contain' }}
                    onError={(e) => { e.target.src = '/pharma_quality.png'; }}
                  />
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} style={{ flex: 1, height: '80px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #eee' }}></div>
                  ))}
                </div>
              </div>

              {/* Center: Main Info */}
              <div style={{ borderRight: '1px solid #eee', paddingRight: '2rem' }}>
                <span className="category-tag">{selectedProduct.category}</span>
                <h1 style={{ color: 'var(--primary)', fontSize: '2.2rem', marginBottom: '0.5rem' }}>{selectedProduct.name}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                  <div style={{ color: '#fbbf24', fontSize: '1.1rem' }}>★★★★★</div>
                  <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>{selectedProduct.rating} Rating</span>
                  <span style={{ color: 'var(--text-muted)' }}>| {selectedProduct.reviews} Global Reviews</span>
                </div>
                <div style={{ height: '1px', background: '#eee', margin: '20px 0' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>{selectedProduct.price}</span>
                  <span style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>{selectedProduct.oldPrice}</span>
                  <span style={{ background: '#fef2f2', color: '#ef4444', padding: '4px 10px', borderRadius: '5px', fontSize: '0.8rem', fontWeight: '800' }}>SAVE 15%</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: '1.8' }}>{selectedProduct.details}</p>
                <h4 style={{ marginBottom: '1rem' }}>Key Highlights:</h4>
                <ul style={{ paddingLeft: '20px', display: 'grid', gap: '10px' }}>
                  {selectedProduct.highlights.map((h, i) => (
                    <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Right: Buy Box */}
              <div className="glass-card" style={{ padding: '2rem', border: '1px solid #eee', height: 'fit-content' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{selectedProduct.price}</h3>
                <p style={{ color: selectedProduct.stock === 'In Stock' ? '#10b981' : '#f59e0b', fontWeight: '700', fontSize: '1.1rem', marginBottom: '1rem' }}>{selectedProduct.stock}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>FREE delivery: <b>Wednesday, May 8</b></p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700' }}>Quantity:</label>
                  <select style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', marginTop: '5px' }}>
                    <option>1</option><option>2</option><option>3</option><option>4</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <button 
                    className="btn btn-primary" 
                    style={{ width: '100%', borderRadius: '50px', background: '#ffd814', color: 'black', border: '1px solid #fcd200', boxShadow: 'none' }}
                    onClick={() => {
                      setCartCount(prev => prev + 1);
                      setSelectedProduct(null);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="btn btn-primary" 
                    style={{ width: '100%', borderRadius: '50px', background: '#ffa41c', color: 'black', border: '1px solid #ff8f00', boxShadow: 'none' }}
                    onClick={() => navigate('/checkout')}
                  >
                    Buy Now
                  </button>
                </div>
                
                <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <p>🛡️ Secure transaction</p>
                  <p>📦 Ships from Orfit Pharma</p>
                  <p>🔄 7-day Replacement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Floating Bottom Checkout Bar */}
      {cartCount > 0 && (
        <div style={{ 
          position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
          width: 'min(90vw, 500px)', background: 'var(--primary)', color: 'white',
          padding: '15px 30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          display: 'flex', justifyContent: 'between', alignItems: 'center', zIndex: 2500,
          animation: 'fadeInUp 0.5s ease-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '1.5rem' }}>🛒</span>
            <div>
              <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.7 }}>{cartCount} ITEMS ADDED</p>
              <h4 style={{ margin: 0, color: 'var(--secondary)' }}>Ready to Order?</h4>
            </div>
          </div>
          <button 
            onClick={() => navigate('/checkout')}
            className="btn btn-primary" 
            style={{ padding: '10px 25px', borderRadius: '12px', background: 'var(--secondary)', color: 'var(--primary)', fontWeight: '800' }}
          >
            CHECKOUT NOW →
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
