var express = require('express');
var request = require('request');

var app = express();

var SERVER_HOST = 'http://localhost:8000';

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.render('base');
});

app.post('/upload', function (req, res) {
   /** API: localhost:8000/upload method:POST -> uploading files **/
   var formData = {};
   request.post({
       url: SERVER_HOST + '/upload',
       formData: formData
   }, function(error, response){
      if(error){
          console.log(error);
      }
      console.log(response)

   })
});


app.listen(8001, function () {
  console.log('Example app listening on port 8001!');
});
