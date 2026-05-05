const mysql = require('mysql2/promise');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill all required fields.' });
    }

    const db = await mysql.createConnection({
        host: process.env.DB_HOST || 'srv2203.hstgr.io',
        user: process.env.DB_USER || 'u869403905_abc',
        password: process.env.DB_PASSWORD || 'Ganesh@703080',
        database: process.env.DB_NAME || 'u869403905_soham_project'
    });

    try {
        const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';
        await db.execute(query, [name, email, subject, message]);
        res.status(200).json({ success: 'Message sent successfully! We will contact you soon.' });
    } catch (err) {
        res.status(500).json({ error: 'Database error. Please try again.' });
    } finally {
        await db.end();
    }
}
