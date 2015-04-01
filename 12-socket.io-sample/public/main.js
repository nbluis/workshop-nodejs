$(function() {
	$('.chat-section').hide();

	$("#botao-login").on('click', function() {
		var nome = $('#nome').val();
		if (nome.length == 0) {
			alert('Preenche o nome tchê!');
		} else {
			abreChat(nome);
		}
	});

	function addMessage(data, eu) {
		console.log(data);
		var quem = (eu) ? 'eu' : '' ;
		$('.chat-panel').append($('<div class="'+quem+'"></div>').text(data.usuario+': '+data.mensagem));
	}

	function abreChat(nome) {
		console.log('Abri o chat');
		$('.chat-section').show();
		$('.identificacao').hide();

		var socket = io.connect('http://localhost:3000', {query: 'nome=' + nome});

		socket.on('recebeu-mensagem', function(data) {
			addMessage(data, false);
		});

		socket.on('update-users', function(users) {
			console.log('users ' + users);
			$('#chat-users').text(users);
			$('#chat-user').text(nome);
		});

		socket.on('nomes', function(nomes) {
			for(var index in nomes) {
				$('#nomes').append($('<li></li>').text(nomes[index]));
			}
		});

		socket.on('remover-nome', function(nome) {
			console.log('Removendo '+nome);
			$('#nomes li').each(function(){
				if($(this).text()==nome){
					$(this).remove();
				}
			});
		});

		$('#send-button').on('click', function() {
			var messageBox = $('.chat-message');
			if (messageBox.val().length > 0) {
				var mensagem = {
					usuario: nome,
					mensagem : messageBox.val()
				}
				addMessage(mensagem, true);
				socket.emit('enviar-mensagem', mensagem);
				messageBox.val('');
			}
		});
	}

});
