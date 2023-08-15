const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path'); // Import the 'path' module

const app = express();
const port = process.env.PORT || 4002;

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

// Configure EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a route for the root URL
app.get('/', (req, res) => {
    res.render('index.ejs'); // Render the EJS template
});

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
