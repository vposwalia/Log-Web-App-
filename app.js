const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/results', (req, res) => {
    const sortField = req.query.sort || 'id';
    const sortOrder = req.query.order || 'asc';
    
    let query = 'SELECT * FROM missions ORDER BY ?? ' + sortOrder;
    const inserts = [sortField];

    query = mysql.format(query, inserts);

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            return res.status(500).send('An error occurred');
        }
        res.render('result.ejs', { results, sortField, sortOrder });
    });
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
app.post('/delete/:id', (req, res) => {
    const missionId = req.params.id;
    const query = 'DELETE FROM missions WHERE id = ?';
    connection.query(query, [missionId], (error, results) => {
        if (error) {
            console.error('Error deleting data:', error);
            return res.status(500).send('An error occurred');
        }
        res.redirect('/results'); // Redirect to the results page after deletion
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
