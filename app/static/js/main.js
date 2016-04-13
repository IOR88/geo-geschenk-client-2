
angular
    .module('geoGeschenk', ['ngFileUpload'])

    .controller('gesController',
    ['Upload',
    function(
     Upload
     ){


     var socket = io.connect('http://localhost:8000');

     socket.on('connect', function() {
        /** when connection between sockets is established**/
        console.log('connected');
     });

     socket.on('geosquizzy', function(data){
         /** gets information when geosquizzy algorithm is
          *  traversing document**/
         console.log('geosquizzy', data);
     });

     socket.on('data', function(data){
         /** after emitting search event on
          *  data event data will be send or
          *  errors **/
         console.log('data', data);
     });

     socket.on('demo', function(data){
         /** can receive some errors during fetching demo
          *  search query**/
         console.log('demo errors', data)
     });

     setTimeout(function(){
         console.log('starting fetching demo data.');
         socket.emit('demo')

     }, 1000);

     setTimeout(function(){
         console.log('starting geosquizzy algorithm execution.');
         socket.emit('search', { query: {} });
     }, 6000);



    }]);
