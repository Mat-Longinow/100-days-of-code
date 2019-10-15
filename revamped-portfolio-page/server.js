const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// let logger = (req, res, next) => {
//     console.log('Logging...');
//     next();
// };
// app.use(logger);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

let users = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Smith',
        email: 'test@test.com'
    },
    {
        id: 2,
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'test2@test.com'
    },
    {
        id: 3,
        first_name: 'Jonny',
        last_name: 'Smith',
        email: 'test3@test.com'
    },
    {
        id: 4,
        first_name: 'Jeremy',
        last_name: 'Smith',
        email: 'test4@test.com'
    }
];

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.post('/users/add', (req, res) => {
    var newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    };

    users.push(newUser);

    console.log(users);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));