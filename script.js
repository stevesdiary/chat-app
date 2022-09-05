var socket = io();
var messages = document.getElementById("messages");
const messageContainer = document.getElementById("message-container");   
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {
console.log(input.value);
   e.preventDefault();
   if (input.value) {
   socket.emit('chatmessage', input.value);
   input.value = '';
   }
});


// To list our chat messages
socket.on('chatmessage', function(msg) {
   var item = document.createElement('li');
   item.textContent = msg;
   messages.appendChild(item);
   window.scrollTo(0, document.body.scrollHeight);
});