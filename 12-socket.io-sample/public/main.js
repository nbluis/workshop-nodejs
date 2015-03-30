$(function() {
	var socket = io.connect('http://localhost:3000');

	function addMessage(message) {
		$('.chat-panel').append($('<div></div>').text(message));
	}

	socket.on('message-sent', function(data) {
		addMessage(data);
	});

	socket.on('update-users', function(users) {
		console.log('users ' + users);
		$('#chat-users').text(users);
	});

	$('#send-button').on('click', function() {
		var messageBox = $('.chat-message');
		if (messageBox.val().length > 0) {
			addMessage(messageBox.val());
			socket.emit('send-message', messageBox.val());
			messageBox.val('');
		}
	});
});