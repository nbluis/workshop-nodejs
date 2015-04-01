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

	function addNome(nome) {
		$('#nomes').append($('<li></li>').text(nome));
	}

	function abreChat(nome) {
		$('.chat-section').show();
		$('.identificacao').hide();
		$('#chat-user').text(nome);
		
		var socket = io.connect('//', {query: 'nome=' + nome});

		socket.on('recebeu-mensagem', function(data) {
			addMessage(data, false);
		});

		socket.on('nomes', function(data) {
			$('#chat-users').text(data.count);
			for(var index in data.nomes) {
				addNome(data.nomes[index]);
			}
		});

		socket.on('adicionar-nome', function(data) {
			addNome(data.nome);
			$('#chat-users').text(data.count);
		});

		socket.on('remover-nome', function(data) {
			$('#chat-users').text(data.count);
			$('#nomes li').each(function(){
				if($(this).text()==data.nome){
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
