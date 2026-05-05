import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hi there! Welcome to Orfit Pharmaceuticals. How can we assist you today?", isBot: true, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const getBotResponse = (text) => {
    const input = text.toLowerCase();
    if (input.includes("product") || input.includes("medicine")) {
      return "We offer premium Cardiovascular, Antibiotics, and Diabetic pharmaceutical products. You can explore them in our 'Products' section.";
    } else if (input.includes("price") || input.includes("cost")) {
      return "For pricing details and bulk inquiries, please email us at info@orfitpharmaceuticals.in or call our sales team directly.";
    } else if (input.includes("order")) {
      return "You can place orders through our website or contact our distribution partners. Would you like to see our product catalog?";
    } else if (input.includes("contact") || input.includes("support")) {
      return "You can reach us at 06124545656. Our team is available from 9 AM to 6 PM, Monday to Saturday.";
    }
    return "Thank you for reaching out! Your message has been received, and one of our experts will get back to you shortly.";
  };

  const handleSend = (text) => {
    const msgText = text || input;
    if (!msgText.trim()) return;
    
    setMessages(prev => [...prev, { 
      text: msgText, 
      isBot: false, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }]);
    setInput("");
    setIsTyping(true);

    // Simulate Bot Intelligence
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(msgText);
      setMessages(prev => [...prev, { 
        text: response, 
        isBot: true, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
    }, 1500);
  };

  const quickActions = [
    { label: "📦 View Products", value: "Products" },
    { label: "📞 Contact Us", value: "Contact" },
    { label: "💰 Inquiry Price", value: "Price" },
    { label: "📍 Locations", value: "Where are you located?" }
  ];

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 10000 }}>
      {/* Premium Chat Window */}
      <div style={{ 
        position: 'absolute', bottom: '90px', right: 0, 
        width: 'min(400px, 90vw)', 
        height: '600px', 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(20px)',
        borderRadius: '30px', 
        boxShadow: '0 25px 60px rgba(0, 45, 91, 0.25)', 
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.5)',
        transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none'
      }}>
        {/* Modern Header */}
        <div style={{ 
          background: 'linear-gradient(135deg, #002d5b 0%, #00d2ff 100%)', 
          color: 'white', padding: '30px 25px', 
          display: 'flex', alignItems: 'center', gap: '15px',
          position: 'relative'
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: '50px', height: '50px', background: 'white', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', overflow: 'hidden' }}>
              <img src="/logo (1).png" alt="Bot" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '14px', height: '14px', background: '#00ff88', borderRadius: '50%', border: '2px solid white' }}></div>
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800' }}>Orfit Virtual Assistant</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '8px', height: '8px', background: '#00ff88', borderRadius: '50%' }}></span>
              <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.9 }}>Online & Ready to Help</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '35px', height: '35px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >✕</button>
        </div>

        {/* Messages Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '25px', background: '#f0f4f8', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {messages.map((m, i) => (
            <div key={i} style={{ 
              alignSelf: m.isBot ? 'flex-start' : 'flex-end',
              maxWidth: '85%',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px'
            }}>
              <div style={{ 
                padding: '14px 20px',
                borderRadius: m.isBot ? '22px 22px 22px 4px' : '22px 22px 4px 22px',
                background: m.isBot ? 'white' : 'linear-gradient(135deg, #002d5b 0%, #004a8f 100%)',
                color: m.isBot ? '#1e293b' : 'white',
                boxShadow: m.isBot ? '0 4px 15px rgba(0,0,0,0.05)' : '0 8px 20px rgba(0,45,91,0.2)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                {m.text}
              </div>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8', alignSelf: m.isBot ? 'flex-start' : 'flex-end', padding: '0 5px' }}>{m.time}</span>
            </div>
          ))}

          {isTyping && (
            <div style={{ alignSelf: 'flex-start', background: 'white', padding: '12px 20px', borderRadius: '22px 22px 22px 4px', display: 'flex', gap: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }}></div>
              <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%', animationDelay: '0.2s' }}></div>
              <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%', animationDelay: '0.4s' }}></div>
            </div>
          )}
          
          {/* Enhanced Quick Actions */}
          {messages.length < 5 && !isTyping && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
              {quickActions.map(action => (
                <button 
                  key={action.value} 
                  onClick={() => handleSend(action.value)}
                  style={{ 
                    background: 'white', border: '1px solid #e2e8f0', color: '#002d5b', 
                    padding: '10px 18px', borderRadius: '15px', fontSize: '0.85rem', 
                    fontWeight: '700', cursor: 'pointer', transition: 'all 0.3s',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                  onMouseOver={(e) => { e.target.style.borderColor = '#00d2ff'; e.target.style.transform = 'translateY(-2px)'; }}
                  onMouseOut={(e) => { e.target.style.borderColor = '#e2e8f0'; e.target.style.transform = 'translateY(0)'; }}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Improved Input Area */}
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} style={{ padding: '25px', background: 'white', display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              placeholder="Type your message here..." 
              style={{ 
                width: '100%', padding: '15px 20px', borderRadius: '18px', 
                border: '2px solid #f1f5f9', outline: 'none', fontSize: '0.95rem',
                background: '#f8fafc', transition: 'all 0.3s'
              }} 
              onFocus={(e) => e.target.style.borderColor = '#00d2ff'}
              onBlur={(e) => e.target.style.borderColor = '#f1f5f9'}
            />
          </div>
          <button 
            type="submit" 
            style={{ 
              width: '55px', height: '55px', borderRadius: '18px', 
              background: 'linear-gradient(135deg, #002d5b 0%, #00d2ff 100%)', 
              color: 'white', border: 'none', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s',
              boxShadow: '0 10px 20px rgba(0, 45, 91, 0.2)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05) rotate(5deg)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0)'}
          >
            <span style={{ fontSize: '1.4rem' }}>➤</span>
          </button>
        </form>
      </div>

      {/* Modern Floating Bubble */}
      <div 
        className="chatbot-bubble" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: '75px', height: '75px', 
          background: 'linear-gradient(135deg, #002d5b 0%, #00d2ff 100%)',
          borderRadius: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', cursor: 'pointer',
          boxShadow: '0 15px 40px rgba(0, 45, 91, 0.4)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
        }}
      >
        {isOpen ? (
          <span style={{ fontSize: '1.8rem' }}>✕</span>
        ) : (
          <div style={{ position: 'relative' }}>
             <span style={{ fontSize: '2.2rem' }}>💬</span>
             <span style={{ position: 'absolute', top: '-5px', right: '-5px', width: '12px', height: '12px', background: '#00ff88', borderRadius: '50%', border: '2px solid white' }}></span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes typing {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .typing-dot {
          animation: typing 1s infinite ease-in-out;
        }
        @media (max-width: 480px) {
          div[style*="width: min"] { 
            width: 95vw !important; 
            height: 80vh !important; 
            bottom: 100px !important; 
            right: -15px !important; 
          }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;

