const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let logger = (req, res, next) => {
    console.log('Logging...');
};

app.get('/', (req, res) => {
    res.send('index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));