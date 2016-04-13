var express = require('express');
var request = require('request');
var body_parser = require('body-parser');

var app = express();

var SERVER_HOST = 'http://localhost:8000';
var APP_PORT = 8001;

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use('/static', express.static(__dirname + '/static'));

app.use( body_parser.json() );       // to support JSON-encoded bodies
app.use(body_parser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function (req, res) {
  res.render('base');
});

app.post('/search', function (req, res, next) {
    return request.post({
        url: SERVER_HOST + '/search',
        json: req.body
    }, function(error, response){

        if(error){
          res.status(401).end();

        } else {
          res.status(200);
          res.json(response.body);
          res.end()
        }
    })
});


app.listen(APP_PORT, function () {
  console.log('App listening on port ',APP_PORT);
});
