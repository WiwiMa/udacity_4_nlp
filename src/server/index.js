const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const aylien = require('aylien_textapi')
const dotenv = require('dotenv')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// Preparation for API call
dotenv.config()
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

// 1 - Handling POST request from Client to receive URL
app.post('/articleUrl', processArticle);

async function processArticle(req, res) {
    console.log(req.body);
    const url = req.body.article;
    console.log(url);

    const contactingAPI = await textapi.sentiment({
        url: url,
        mode: 'document'
    }, function (error, response) {
        if (error === null) {
            console.log(response);
            res.send(response);
        } else {
            console.log(error);
            res.send({'state': 'Unfortunately your request could not be processed. Please enter a valid URL.'});
        }
    });
};

module.export = app;
exports.processArticle = processArticle;