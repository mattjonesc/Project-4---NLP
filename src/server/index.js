var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
var bodyParser = require('body-parser')
var cors = require('cors')

var json = {
  'title': 'test json response',
  'message': 'this is a message',
  'time': 'now'
}

const app = express()

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(7000, function () {
    console.log('Example app listening on port 7000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
    console.log(mockAPIResponse);
});

app.get('/sentiment', (req, res) => {

  const apiKey = process.env.API_KEY; 
  // Define the text to analyze
  const urlToAnalyze = req.query.variable1;
  const inputType = req.query.variable2;
  let url;

  // Set up the request parameters
  if (inputType === 'url') {
    url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&url=${encodeURIComponent(urlToAnalyze)}`;
  } else {
    url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${encodeURIComponent(urlToAnalyze)}`;
  };

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data); // Log the API response
      // Do something with the sentiment analysis data
      console.log(data.status);
      res.json(data);
    })
    .catch(error => console.log('error', error));

});