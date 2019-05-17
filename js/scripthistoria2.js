var current = 0;
var slides = document.getElementsByTagName("li");

function ZmienSlajd(kierunek){

	current = current + kierunek;

  if (current < 0) {current = slides.length - 1}

  if (current > slides.length - 1) {current = 0}

  for (var i = 0; i < slides.length; i++) {

  	if (i == current) {slides[i].style.opacity = 1} 

    else {slides[i].style.opacity = 0}
  }
}

setInterval(function() {ZmienSlajd(1);}, 5500);
