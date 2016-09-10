var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

io.on('connection', function(socket) {
  var messages = [
    {
      title: 'title-1',
      description: 'description-1'
    }
  ];

  io.emit('sendMessage', messages);

  socket.on('addMessage', function(message) {
    messages.push(message);
    io.emit('sendMessage', messages);
  });
});

server.listen(3000);
