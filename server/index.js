const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection Pool (Better for stability)
const db = mysql.createPool({
    host: process.env.DB_HOST || 'srv2203.hstgr.io',
    user: process.env.DB_USER || 'u869403905_abc',
    password: process.env.DB_PASSWORD || 'Ganesh@703080',
    database: process.env.DB_NAME || 'u869403905_soham_project',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test Connection and Create Tables
db.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Error connecting to database:');
        console.error('Code:', err.code);
        console.error('Message:', err.message);
        return;
    }
    console.log('✅ Connected to Hostinger MySQL Database (via Pool).');
    connection.release(); // Release back to pool

    // Automatically Create Tables
    const createContactsTable = `
        CREATE TABLE IF NOT EXISTS contacts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            subject VARCHAR(255),
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    const createProductsTable = `
        CREATE TABLE IF NOT EXISTS products (
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            category VARCHAR(255),
            pack VARCHAR(100),
            price VARCHAR(50),
            oldPrice VARCHAR(50),
            badge VARCHAR(50),
            rating FLOAT,
            reviews INT,
            stock VARCHAR(50),
            details TEXT,
            highlights JSON,
            image VARCHAR(255)
        )
    `;

    db.query(createContactsTable, (err) => {
        if (err) console.error('❌ Contacts Table Error:', err.message);
        else console.log('📊 Contacts table ready.');
    });

    db.query(createProductsTable, (err) => {
        if (err) {
            console.error('❌ Products Table Error:', err.message);
        } else {
            console.log('📦 Products table ready.');
            
            // Seed Products if empty
            db.query('SELECT COUNT(*) as count FROM products', (err, result) => {
                if (!err && result[0].count === 0) {
                    const products = [
                        { id: 30, name: "KNEEMATRIX PLUS", category: "Joint Care", pack: "10x1x10 Softgels", price: "₹2450", oldPrice: "₹2900", badge: "BEST SELLER", rating: 4.8, reviews: 124, stock: "In Stock", details: "KNEEMATRIX PLUS is a premium formulation for joint health, containing Glucosamine, Chondroitin, and essential minerals to support cartilage repair and mobility.", highlights: JSON.stringify(["Supports Joint Flexibility", "Cartilage Regeneration", "Enriched with Minerals"]) },
                        { id: 28, name: "MUCH-24", category: "Multivitamin", pack: "10x1x10 Softgels", price: "₹1850", oldPrice: "₹2100", badge: "POPULAR", rating: 4.9, reviews: 310, stock: "In Stock", details: "MUCH-24 is a comprehensive 24-ingredient multivitamin designed for daily vitality, immunity boost, and metabolic support.", highlights: JSON.stringify(["24 Essential Nutrients", "Immunity Support", "Energy Booster"]) },
                        { id: 4, name: "AHA-GOLD", category: "Antioxidant", pack: "10x1x10 Softgels", price: "₹2200", oldPrice: "₹2500", badge: "NEW", rating: 4.7, reviews: 85, stock: "Limited Stock", details: "AHA-GOLD provides powerful antioxidant protection with Alpha Lipoic Acid and Lycopene to fight oxidative stress and support heart health.", highlights: JSON.stringify(["Cardiac Support", "Skin Health", "Powerful Antioxidant"]) },
                        { id: 10, name: "BHIMCAL-MAX K27", category: "Calcium", pack: "10x1x10 Softgels", price: "₹1200", oldPrice: "₹1400", badge: "", rating: 4.6, reviews: 92, stock: "In Stock", details: "BHIMCAL-MAX K27 combines high-absorption Calcium with Vitamin K27 to ensure calcium reaches the bones and not the arteries.", highlights: JSON.stringify(["Bone Density Support", "K27 for Absorption", "Milk-derived Calcium"]) },
                        { id: 14, name: "FEMURSO-300", category: "Hepatobiliary", pack: "10x10 Tablets", price: "₹3400", oldPrice: "₹3800", badge: "DISCOUNT", rating: 4.9, reviews: 45, stock: "In Stock", details: "FEMURSO-300 (Ursodeoxycholic Acid) is used for the treatment of primary biliary cirrhosis and dissolution of gallstones.", highlights: JSON.stringify(["Liver Health", "Gallstone Dissolution", "MNC Grade Quality"]) },
                        { id: 13, name: "OCEDEZACORT-6", category: "Steroid", pack: "10x10 Tablets", price: "₹850", oldPrice: "₹1000", badge: "", rating: 4.5, reviews: 67, stock: "In Stock", details: "OCEDEZACORT-6 (Deflazacort) is a corticosteroid with anti-inflammatory and immunosuppressant properties used in various conditions.", highlights: JSON.stringify(["Anti-inflammatory", "Immunosuppressant", "Rapid Action"]) },
                        { id: 9, name: "ORFICEF-CV 200", category: "Antibiotic", pack: "10x1x10 Tablets", price: "₹950", oldPrice: "₹1100", badge: "", rating: 4.8, reviews: 156, stock: "In Stock", details: "ORFICEF-CV 200 is a powerful broad-spectrum antibiotic combination used for treating severe bacterial infections.", highlights: JSON.stringify(["Broad Spectrum", "High Efficacy", "Safe for Adults"]) },
                        { id: 8, name: "KULKAST-M", category: "Anti-Allergic", pack: "10x10 Tablets", price: "₹750", oldPrice: "₹900", badge: "", rating: 4.7, reviews: 204, stock: "In Stock", details: "KULKAST-M (Montelukast & Levocetirizine) provides rapid relief from allergic rhinitis and asthma symptoms.", highlights: JSON.stringify(["Allergy Relief", "Asthma Support", "Non-drowsy Formula"]) },
                        { id: 22, name: "ORFI-OZ", category: "Infection", pack: "10x10 Tablets", price: "₹1150", oldPrice: "₹1300", badge: "", rating: 4.6, reviews: 88, stock: "In Stock", details: "ORFI-OZ is an effective combination for gastrointestinal infections and mixed bacterial-protozoal infections.", highlights: JSON.stringify(["Dual Action", "Stomach Infection Relief", "Proven Results"]) }
                    ];

                    const insertQuery = 'INSERT INTO products (id, name, category, pack, price, oldPrice, badge, rating, reviews, stock, details, highlights) VALUES ?';
                    const values = products.map(p => [p.id, p.name, p.category, p.pack, p.price, p.oldPrice, p.badge, p.rating, p.reviews, p.stock, p.details, p.highlights]);
                    
                    db.query(insertQuery, [values], (err) => {
                        if (err) console.error('❌ Seeding Error:', err.message);
                        else console.log('✅ Initial products seeded.');
                    });
                }
            });
        }
    });
});

// API Routes
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        // Parse JSON highlights
        const parsedResults = results.map(p => ({
            ...p,
            highlights: typeof p.highlights === 'string' ? JSON.parse(p.highlights) : p.highlights
        }));
        res.json(parsedResults);
    });
});

app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill all required fields.' });
    }

    const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, subject, message], (err, result) => {
        if (err) {
            console.error('❌ Error saving contact data:', err.message);
            return res.status(500).json({ error: 'Database error. Please try again.' });
        }
        res.status(200).json({ success: 'Message sent successfully! We will contact you soon.' });
    });
});

// Get all contacts (for display as requested)
app.get('/api/contacts', (req, res) => {
    db.query('SELECT * FROM contacts ORDER BY created_at DESC', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
