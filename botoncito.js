document.addEventListener('DOMContentLoaded', function() {
  // Botón escritorio
  const btn = document.querySelector('.boton-votar');
  if (btn) {
    btn.addEventListener('click', function() {
      window.location.href = 'tarjeton.html';
    });
  }
  // Botón mobile
  const btnMobile = document.querySelector('.boton-mobile');
  if (btnMobile) {
    btnMobile.addEventListener('click', function() {
      window.location.href = 'tarjeton.html';
    });
  }
});
