// Make connection
var socket = io.connect('http://localhost:5000');


// Query Dom
var message = document.getElementsById('message'),
    handle= document.getElementById('handle'),
    btn  = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback= document.getElementById('feedback');


//Emit Events

btn.addEventListener('click', function(){
  socket.emit('Chat',{

    message:message.value,
    handle:handle.value
  });
});

message.addEventListener('keypress', function(){
  socket.emit('typing',handle.value);
});
//listen for Events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
  feedback.innerHTML ='<p><em>' + data + 'is typing...</em>'
});
