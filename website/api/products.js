const mysql = require('mysql2/promise');

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const db = await mysql.createConnection({
        host: process.env.DB_HOST || 'srv2203.hstgr.io',
        user: process.env.DB_USER || 'u869403905_abc',
        password: process.env.DB_PASSWORD || 'Ganesh@703080',
        database: process.env.DB_NAME || 'u869403905_soham_project'
    });

    try {
        const [results] = await db.execute('SELECT * FROM products');
        
        // Parse JSON highlights
        const parsedResults = results.map(p => ({
            ...p,
            highlights: typeof p.highlights === 'string' ? JSON.parse(p.highlights) : p.highlights
        }));

        res.status(200).json(parsedResults);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        await db.end();
    }
}
