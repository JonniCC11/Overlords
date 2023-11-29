const icono = document.getElementById('icono');

icono.addEventListener('click', function() {

});




var musica = document.getElementById("musica");


window.onload = function() {
  musica.play();
};


function toggleMusica() {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
