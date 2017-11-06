var pressButton = document.getElementById('btn');

pressButton.addEventListener('click', function (){
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('tweetbox').value;

	//limpiar el textarea
	document.getElementById('tweetbox').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('tweet-cont');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');

	//crear checkbox
	var trash = document.createElement('i');
	trash.classList.add('fa', 'fa-trash', 'trash'); // 'trash' está definida en el css
	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(trash);
	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments);

});

/*function uploadingtweet() {
    btn.addEventListener("click", enviar);
    textArea.addEventListener("keyup", validar);
    textArea.addEventListener("keydown", growing);
}*/
