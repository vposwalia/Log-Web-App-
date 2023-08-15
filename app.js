const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 4000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mission'
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to database:', error);
        return;
    }
    console.log('Connected to database');
});

app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const formData = req.body;

    const query = 'INSERT INTO missions SET ?';
    connection.query(query, formData, (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return res.status(500).send('An error occurred');
        }
        res.sendStatus(200);
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
