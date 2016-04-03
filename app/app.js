var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use('/static',express.static('static'));

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('base')
});

app.listen(8001, function () {
  console.log('Example app listening on port 8001!');
});
