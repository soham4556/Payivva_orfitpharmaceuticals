const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : ''; // Empty string means use the same domain (Vercel)

export default API_URL;
