const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Create Connection
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'customer_app'
});

// Connect
db.connect((err) => {
    if(err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + db.threadId);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    })
});

app.post('/users/add', (req, res) => {

    let sql = 'INSERT INTO users SET ?';

    let newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        logged_in: 0
    };

    db.query(sql, newUser, (err) => {
        if(err) throw err;
    });

    console.log(`User added!`);
});

app.post('/users/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if(err) throw err;

        let users = results;

        users.forEach((user) => {
            if (user.email === email && user.password === password) {
                sql = 'UPDATE users SET logged_in = 1 WHERE id = ?';

                let id = user.id;

                db.query(sql, id, (err) => {
                    if(err) throw err;
                })
            };
        });
    });
});

app.post('/users/logout', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if(err) throw err;

        let users = results;

        users.forEach((user) => {
            if (user.email === email && user.password === password) {
                sql = 'UPDATE users SET logged_in = 0 WHERE id = ?';

                let id = user.id;

                db.query(sql, id, (err) => {
                    if(err) throw err;
                })
            };
        });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));