const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Database connection configuration using environment variables
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
};

// Create a connection pool to the RDS instance
const pool = mysql.createPool(dbConfig);

// Serve the static HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// New API endpoint to fetch users from the database
app.get('/api/users', (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Database connection failed' });
        }
        res.json(results);
    });
});

// Health check endpoint (Critical for ALB target group health checks)
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Attempting to connect to database at: ${process.env.DB_HOST}`);
});