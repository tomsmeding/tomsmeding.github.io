function onload () {
	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++) {
		images[i].onclick = function (event) {
			document.body.style.backgroundImage = 'url("' + event.target.src + '")';
		};
	}

	var offset = 0;
	var a = function () {
		document.body.style.backgroundPositionX = (offset += (Math.random() > .05 ? 25 : -25)) + "px";
		requestAnimationFrame(a);
	};a();
}
