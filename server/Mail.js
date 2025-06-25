const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hruday',
});

conn.connect((err) => {
    if (err) {
        console.error('MySQL Connection Failed:', err);
        return;
    }
    console.log('Connected to MySQL');

    // Create table if not exists
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS tourists (
            email VARCHAR(90)
        );
    `;
    conn.query(createTableQuery, (err) => {
        if (err) {
            console.error('Table creation failed:', err);
        } else {
            console.log('Table ready');
        }
    });
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'perumallasuhrudayreddy@gmail.com',
        pass: 'mald snnl gglr qfmp', // Consider using environment variables
    }
});

// Booking route
app.post('/Booking', (req, res) => {
    const { mail } = req.body;

    if (!mail) {
        return res.status(400).json({ message: "Email is required" });
    }

    const sql = `INSERT INTO tourists (email) VALUES (?)`;
    conn.query(sql, [mail], (err) => {
        if (err) {
            console.error('Insert failed:', err);
            return res.status(500).json({ message: "Database error" });
        }

        // Send email after DB insert
        const mailOptions = {
            from: 'perumallasuhrudayreddy@gmail.com',
            to: mail,
            subject: 'Test Mail',
            text: 'Hi there! Thanks for booking.',
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Failed to send mail:', err);
                return res.status(500).json({ message: "Booking saved, but email failed" });
            } else {
                console.log('Email sent:', info.response);
                res.json({ message: "Booking successfully recorded and email sent!" });
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
