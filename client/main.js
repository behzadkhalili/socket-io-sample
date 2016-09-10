var io = io.connect(':3000');

io.on('sendMessage', function(messages) {
  console.log(messages);
});

window.onload = function() {
  document.getElementById('send').onclick = function() {
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    io.emit('addMessage', {title: title, description: description});
    title.value = description.value = '';
  };
};
