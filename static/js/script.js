const icono = document.getElementById('icono');

icono.addEventListener('click', function() {
    // Lógica para manejar el clic del icono
});



// Obtén el elemento de audio
var musica = document.getElementById("musica");

// Reproduce la música automáticamente cuando se carga la página
window.onload = function() {
  musica.play();
};

// Función para pausar o reanudar la música cuando el usuario hace clic en un botón (por ejemplo)
function toggleMusica() {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
