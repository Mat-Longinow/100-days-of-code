const express = require('express');
const app = express();
const port = 3000;
const scrape = require('./scrape.js');
require('dotenv').config();

console.log(process.env);

// scrape.scrapeInit();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));