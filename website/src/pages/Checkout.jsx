import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div className="checkout-page" style={{ background: '#f8fafc', minHeight: '100vh', padding: '40px 0' }}>
      <div className="container">
        {/* Amazon-style Progress Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', gap: '20px', alignItems: 'center' }}>
          {['Address', 'Payment', 'Review'].map((s, i) => (
            <React.Fragment key={s}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ 
                  width: '30px', height: '30px', borderRadius: '50%', 
                  background: step >= i + 1 ? 'var(--secondary)' : '#ddd', 
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' 
                }}>{i + 1}</div>
                <span style={{ fontWeight: step >= i + 1 ? '700' : '500', color: step >= i + 1 ? 'var(--primary)' : '#888' }}>{s}</span>
              </div>
              {i < 2 && <div style={{ width: '50px', height: '2px', background: step > i + 1 ? 'var(--secondary)' : '#ddd' }}></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1.8fr 1fr', gap: '2rem' }}>
          {/* Left Column: Forms */}
          <div className="glass-card" style={{ background: 'white', padding: '30px' }}>
            {step === 1 && (
              <div>
                <h2 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Select a delivery address</h2>
                <form className="flex flex-col gap-1">
                  <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <input placeholder="Full Name" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                    <input placeholder="Mobile Number" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                  </div>
                  <input placeholder="Pincode" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                  <input placeholder="Flat, House no., Building, Company" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                  <input placeholder="Area, Colony, Street, Sector, Village" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                  <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <input placeholder="Town/City" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                    <select style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}>
                      <option>Select State</option>
                      <option>Bihar</option>
                      <option>Delhi</option>
                      <option>Maharashtra</option>
                    </select>
                  </div>
                  <button type="button" className="btn btn-primary" onClick={() => setStep(2)} style={{ marginTop: '20px', background: '#ffd814', color: 'black', border: '1px solid #fcd200' }}>
                    Use this address
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Select a payment method</h2>
                <div className="flex flex-col gap-1">
                  {['UPI (PhonePe, GPay)', 'Credit or Debit Card', 'Net Banking', 'Cash on Delivery'].map((m, i) => (
                    <label key={m} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', border: '1px solid #eee', borderRadius: '12px', cursor: 'pointer' }}>
                      <input type="radio" name="payment" defaultChecked={i === 0} />
                      <span style={{ fontWeight: '600' }}>{m}</span>
                    </label>
                  ))}
                  <button type="button" className="btn btn-primary" onClick={() => setStep(3)} style={{ marginTop: '20px', background: '#ffd814', color: 'black', border: '1px solid #fcd200' }}>
                    Continue to Review
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center" style={{ padding: '40px' }}>
                <h2 style={{ color: 'var(--secondary)', marginBottom: '15px' }}>Order Placed Successfully!</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Thank you for shopping with Orfit Pharmaceuticals. Your order ID is #ORF98234.</p>
                <button onClick={() => navigate('/products')} className="btn btn-primary">Continue Shopping</button>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="glass-card" style={{ background: 'white', padding: '25px', height: 'fit-content', border: '1px solid #eee' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Order Summary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <div className="flex justify-between">
                <span>Items:</span>
                <span>₹2,450.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>₹40.00</span>
              </div>
              <div className="flex justify-between">
                <span>Total:</span>
                <span>₹2,490.00</span>
              </div>
              <div style={{ height: '1px', background: '#eee', margin: '10px 0' }}></div>
              <div className="flex justify-between" style={{ fontSize: '1.2rem', fontWeight: '800', color: '#b12704' }}>
                <span>Order Total:</span>
                <span>₹2,490.00</span>
              </div>
            </div>
            <div style={{ background: '#f0f2f2', padding: '15px', borderRadius: '8px', marginTop: '20px', fontSize: '0.8rem' }}>
              <p>By placing your order, you agree to Orfit's privacy notice and conditions of use.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
