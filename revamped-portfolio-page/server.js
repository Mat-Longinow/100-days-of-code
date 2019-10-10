const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const port = 3000;

// let logger = (req, res, next) => {
//     console.log('Logging...');
//     next();
// };
// app.use(logger);


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));