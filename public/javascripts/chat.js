$(function() {
  var socket = io.connect('http://localhost');
  socket.on('connect', function() {
    console.log('connected');
  });
  
  $('#btn').click(function() {
    var message = $('#message');
    console.log(message);
    //サーバーにメッセージを引数にイベントを実行する
    socket.emit('msg send', message.val());
  });

  //サーバーが受け取ったメッセージを返して実行する
  socket.on('msg push', function (msg) {
    console.log(msg);
    var date = new Date();
    $('#list').prepend($('<dd class="msg">' + msg + '</dd><dt class="date">' + date + '</dt>'));
  });
  
  socket.on('msg updateDB', function(msg){
    console.log(msg);
  });
});