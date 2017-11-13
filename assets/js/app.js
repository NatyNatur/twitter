var pressButton = document.getElementById('btn');
var counting = document.getElementById('counter');
var textArea = document.getElementById('tweetbox');
var tweetLength = textArea.value.trim().length;


pressButton.addEventListener('click', function (){
	//tenemos que tomar el texto ingresado en el textarea
	var tweets = document.getElementById('tweetbox').value;

	//limpiar el textarea
	document.getElementById('tweetbox').value = '';

	//contenedor que está en el html
	var cont = document.getElementById('tweet-cont');

	//creamos el div que contiene cada comentario
	var newTweets = document.createElement('div');

	//nodos de texto del textarea
	var textNewTweet = document.createTextNode(tweets);

	var tweetContainer = document.createElement('p');
	tweetContainer.appendChild(textNewTweet);
	newTweets.appendChild(tweetContainer);
	cont.appendChild(newTweets);
});


textArea.onkeydown = function() {
		//iniciando contador
		var counter = 140;
		//contador de carácteres
		var tweetLong = counter - tweetLength;
		//dándole el valor al contador
		counting.innerHTML = tweetLong;
	};


/*
var time = function timeOfTweet(); {
    var d = new Date();
    var n = d.toLocaleTimeString();
    var timeOf = document.createElement('p');
	timeOf.classList.add('time')
	document.getElementByClassName('time').innerHTML = n;
    newTweets.appendChild(timeOf);
};

*/
