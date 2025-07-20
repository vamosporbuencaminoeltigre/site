// votar.js

function showVotarAlertaModal() {
  let modal = document.getElementById('votar-alerta-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'votar-alerta-modal';
    modal.innerHTML = `
      <div class="vam-backdrop" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.3);z-index:9998;"></div>
      <div class="vam-modal-content" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:2em 2.5em;border-radius:12px;box-shadow:0 2px 16px rgba(0,0,0,0.2);z-index:9999;display:flex;flex-direction:column;align-items:center;max-width:90vw;">
        <div class="vam-close" style="align-self:flex-end;cursor:pointer;font-size:1.5em;color:#e53935;font-weight:bold;line-height:1;">&times;</div>
        <div style="font-size:2em;color:#e53935;margin-bottom:0.5em;">&#9888;</div>
        <div style="font-size:1.2em;text-align:center;font-weight:500;">NI LO INTENTES PRESIONA SOLO VOTAR</div>
      </div>
    `;
    document.body.appendChild(modal);
    // Cerrar al hacer clic en la X
    modal.querySelector('.vam-close').onclick = function() {
      modal.style.display = 'none';
    };
    // Cerrar al hacer clic fuera del modal
    modal.querySelector('.vam-backdrop').onclick = function() {
      modal.style.display = 'none';
    };
  } else {
    modal.style.display = '';
  }
}

function showVotoExitoso() {
  // Ocultar todo el contenido principal
  const contenedor = document.querySelector('.contenedor-votacion');
  if (contenedor) contenedor.style.display = 'none';

  // Crear contenedor de mensaje de éxito
  let exitoDiv = document.getElementById('voto-exitoso');
  if (!exitoDiv) {
    exitoDiv = document.createElement('div');
    exitoDiv.id = 'voto-exitoso';
    exitoDiv.style.display = 'flex';
    exitoDiv.style.flexDirection = 'column';
    exitoDiv.style.alignItems = 'center';
    exitoDiv.style.justifyContent = 'center';
    exitoDiv.style.minHeight = '80vh';
    exitoDiv.innerHTML = `
      <img src="imginicio/lilys.png" alt="LILYS OSUNA" style="max-width:220px;width:80vw;margin-bottom:1em;">
      <img src="imginicio/logo1.png" alt="Logo Lilys" style="max-width:180px;width:60vw;margin-bottom:1.5em;">
      <div style="font-size:1.3em;text-align:center;font-weight:600;color:#1a237e;max-width:90vw;">HAS VOTADO POR EL BIENESTAR Y PROGRESO DE NUESTRA CIUDAD DE EL TIGRE!</div>
    `;
    document.body.appendChild(exitoDiv);
  } else {
    exitoDiv.style.display = 'flex';
  }
}

function setupVotarAlerta() {
  const imgs = document.querySelectorAll('.partido img');
  imgs.forEach(function(img) {
    img.addEventListener('click', function(e) {
      e.preventDefault();
      showVotarAlertaModal();
    });
  });

  // Botón votar
  const votarBtn = document.querySelector('.boton-votar');
  if (votarBtn) {
    votarBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showVotoExitoso();
    });
  }
}

if (window.location.pathname.endsWith('votar.html')) {
  window.addEventListener('DOMContentLoaded', setupVotarAlerta);
} 