var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affich� au client
var server = http.createServer();

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    console.log('Un client est connect� !');
});


server.listen(8088);