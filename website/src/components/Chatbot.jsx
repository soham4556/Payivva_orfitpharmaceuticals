import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hello! Welcome to Orfit Pharmaceuticals. How can we help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput("");

    // Simulate Bot Response
    setTimeout(() => {
      let botResponse = "I've noted your message. One of our health experts will reach out to you shortly.";
      if (userMsg.toLowerCase().includes("product")) {
        botResponse = "You can view our full range of products in the 'Products' section. Are you looking for something specific?";
      } else if (userMsg.toLowerCase().includes("price") || userMsg.toLowerCase().includes("cost")) {
        botResponse = "For pricing and bulk orders, please contact our sales team at info@orfitpharmaceuticals.in";
      }
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const quickActions = [
    "📦 View Products",
    "📞 Call Support",
    "📧 Email Sales"
  ];

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}>
      {/* Chat Window */}
      <div style={{ 
        position: 'absolute', bottom: '80px', right: 0, 
        width: 'clamp(320px, 90vw, 400px)', 
        height: '550px', 
        background: 'white', 
        borderRadius: '25px', 
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)', 
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.05)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none'
      }}>
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', color: 'white', padding: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.2)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>👩‍⚕️</div>
          <div>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Orfit Support</h4>
            <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.8 }}>Online | Typically replies in 5m</p>
          </div>
          <button onClick={() => setIsOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
        </div>

        {/* Messages Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', background: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {messages.map((m, i) => (
            <div key={i} style={{ 
              alignSelf: m.isBot ? 'flex-start' : 'flex-end',
              maxWidth: '85%',
              padding: '12px 16px',
              borderRadius: m.isBot ? '20px 20px 20px 5px' : '20px 20px 5px 20px',
              background: m.isBot ? 'white' : 'var(--primary)',
              color: m.isBot ? '#334155' : 'white',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
              {m.text}
            </div>
          ))}
          
          {/* Quick Actions */}
          {messages.length === 1 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
              {quickActions.map(action => (
                <button 
                  key={action} 
                  onClick={() => {
                    setInput(action.split(' ').slice(1).join(' '));
                  }}
                  style={{ background: 'white', border: '1px solid var(--secondary)', color: 'var(--primary)', padding: '8px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseOver={(e) => e.target.style.background = 'var(--bg-alt)'}
                  onMouseOut={(e) => e.target.style.background = 'white'}
                >
                  {action}
                </button>
              ))}
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} style={{ padding: '20px', background: 'white', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '10px' }}>
          <input 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder="Write a message..." 
            style={{ flex: 1, padding: '12px 18px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '0.9rem' }} 
          />
          <button type="submit" style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'var(--secondary)', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            ➤
          </button>
        </form>
      </div>

      {/* Floating Bubble */}
      <div 
        className="chatbot-bubble" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: '65px', height: '65px', 
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
          borderRadius: '20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: '1.8rem', cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(0, 45, 91, 0.3)',
          transition: 'all 0.3s ease'
        }}
      >
        {isOpen ? '✕' : '💬'}
      </div>

      <style>{`
        @media (max-width: 480px) {
          .chatbot-container { right: 15px !important; bottom: 15px !important; }
          div[style*="width: clamp"] { width: 90vw !important; height: 70vh !important; bottom: 80px !important; right: -5px !important; }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
