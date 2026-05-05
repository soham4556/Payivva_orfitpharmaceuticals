const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : 'https://your-render-backend-url.onrender.com'; // एकदा Render वरून URL मिळाला की इथे तो टाका

export default API_URL;
