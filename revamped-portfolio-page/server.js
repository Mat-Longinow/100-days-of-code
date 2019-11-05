const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

let users = [];

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.get('/users', (req, res) => {
   res.send(users);
});

app.post('/users/add', (req, res) => {
    var newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        logged_in: 0
    };

    users.push(newUser);

    console.log(users);
});

app.post('/users/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    users.forEach((user) => {
        if (user.email === email && user.password === password) {
            user.logged_in = 1;
        };
    });
});

app.post('/users/logout', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    users.forEach((user) => {
        if (user.email === email && user.password === password) {
            user.logged_in = 0;
        };
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));