const express = require('express');
const app = express();
const port = 3080;
const scrape = require('./scrape.js');

scrape.scrapeInit();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));