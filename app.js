// ==============================================
// 🔀 NAVEGACIÓN — Botones de la pantalla de INICIO
// ==============================================
function irALogin() {
  window.location.href = 'login.html';
}

function irARegistro() {
  window.location.href = 'registro.html';
}

// ==============================================
// 👁️ MOSTRAR/OCULTAR CONTRASEÑA (en login)
// ==============================================
const botonOjo = document.getElementById('botonOjo');
if (botonOjo) {
  botonOjo.addEventListener('click', () => {
    const input = document.getElementById('passLogin');
    input.type = input.type === 'password' ? 'text' : 'password';
  });
}

// ==============================================
// 🔐 LOGIN → VA AL DASHBOARD
// ==============================================
const formLogin = document.getElementById('formLogin');
if (formLogin) {
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.getElementById('correoLogin').value.trim();
    const pass = document.getElementById('passLogin').value.trim();
    const mensaje = document.getElementById('mensajeLogin');

    if (correo && pass) {
      if (mensaje) {
        mensaje.className = 'mensaje exito';
        mensaje.textContent = '¡Bienvenido! Ingresando...';
      }
      // ✅ VA AL DASHBOARD
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 800);
    } else {
      if (mensaje) {
        mensaje.className = 'mensaje error';
        mensaje.textContent = 'Completa todos los campos.';
      }
    }
  });
}