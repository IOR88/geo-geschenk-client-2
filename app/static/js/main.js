
angular
    .module('geoGeschenk', ['ngFileUpload'])

    .controller('gesController', ['Upload', function(Upload){


     var socket = io.connect('http://localhost:8000');

     socket.on('connect', function() {
        console.log('connected');
     });

     socket.on('geosquizzy', function(data){
         console.log('geosquizzy', data);
     });

     setTimeout(function(){
         console.log('starting uploading dump file.');
         uploadFile();

     }, 3000);

     function uploadFile(file){
         /** TODO will be not handled by under node layer
          *  TODO websocket should be moved to be handled by
          *  TODO client -> server socket approach**/

         Upload.upload({
                url: 'upload',
                data: {file: file}
            })

     }


    }]);
