$(function () {
    const socket = io();

    $('form').submit(function(){
        const message = $('#input').val();
        socket.emit('message', message);
        $('#input').val('');
        return false;
    });

    socket.on('message', function(msg){
        $('#messages').append($('<li>').text(msg));
    });
});
