const express = require('express');
const app = express();
const port = 3080;
const request = require('request');
const cheerio = require('cheerio');
const twil = require('./send_message.js');

let aboutMe = '';

// This snippet is from the following tutorial: https://www.youtube.com/watch?v=vsmxMLmroyQ&t=176s


function scrapeHTML() {
    return new Promise ((resolve, reject) => {
        request('http://myprogrammingjourney.com/', (err, res, html) => {
            if (!err && res.statusCode === 200) {
                const $ = cheerio.load(html);

                aboutMe = $("#aboutMe > div > div:nth-child(2) > div:nth-child(2) > p:nth-child(1)").html();
            }

            resolve(aboutMe); // Not sure why this has to, in essence, return aboutMe in order for aboutMe to reflect the above change outside the scope of this promise

        });
    });
}

scrapeHTML()
    .then((body) => {
        twil.sendMessage(body);
    });

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));