import mysql from 'mysql2/promise';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill all required fields.' });
    }

    const db = await mysql.createConnection({
        host: process.env.DB_HOST || '82.25.121.184',
        user: process.env.DB_USER || 'u869403905_abc',
        password: process.env.DB_PASSWORD || 'Ganesh@703080',
        database: process.env.DB_NAME || 'u869403905_soham_project'
    });

    try {
        const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';
        // Ensure values are not undefined (convert to null if missing)
        await db.execute(query, [
            name || null, 
            email || null, 
            subject || 'General Inquiry', 
            message || null
        ]);
        res.status(200).json({ success: 'Message sent successfully! We will contact you soon.' });
    } catch (err) {
        console.error('Database Error:', err);
        res.status(500).json({ error: err.message });
    } finally {
        await db.end();
    }
}
