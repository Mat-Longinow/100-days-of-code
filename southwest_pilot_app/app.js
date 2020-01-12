require('dotenv').config({debug: true});
const express = require('express');
const app = express();
const port = 3000;
// const scrape = require('./scrape.js');

// scrape.scrapeInit();

console.log(process.env.TEST);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));