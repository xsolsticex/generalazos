const home = document.getElementById("home");

if (home) {
    home.addEventListener("click", () => {
        window.location.href = "/page/principal.html";
    });
}

// "Mis mensajes" row navigation
const propiedades = document.querySelectorAll(".propiedad");
if (propiedades.length >= 2) {
    propiedades[1].style.cursor = "pointer";
    propiedades[1].addEventListener("click", () => {
        window.location.href = "/page/mensajes.html";
    });
}

// Footer Navigation
const navInicio = document.getElementById("nav-inicio");
const navExplorar = document.getElementById("nav-explorar");
const navMensajes = document.getElementById("nav-mensajes");
const navPerfil = document.getElementById("nav-perfil");

if (navInicio) navInicio.addEventListener("click", () => window.location.href = "/page/principal.html");
if (navExplorar) navExplorar.addEventListener("click", () => window.location.href = "/page/principal.html");
if (navMensajes) navMensajes.addEventListener("click", () => window.location.href = "/page/mensajes.html");
if (navPerfil) navPerfil.addEventListener("click", () => window.location.href = "/page/perfil.html");
