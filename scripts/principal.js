const profile = document.getElementById("profile");
const perfil = document.getElementById("perfil");
const cards = document.querySelectorAll(".card");
const searchInput = document.getElementById("searchInput");

if (cards.length > 0) {
    cards.forEach((item) => {
        item.addEventListener("click", () => {
            window.location.href = "/page/actividad.html";
        });
    });
}

if (profile) {
    profile.addEventListener("click", () => {
        window.location.href = "/page/perfil.html";
    });
}

if (perfil) {
    perfil.addEventListener("click", () => {
        window.location.href = "/page/perfil.html";
    });
}

// Search functionality
if (searchInput && cards.length > 0) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        cards.forEach((card) => {
            const title = card.querySelector(".description-title p")?.textContent.toLowerCase() || "";
            const desc = card.querySelector(".description > p")?.textContent.toLowerCase() || "";
            const category = card.querySelector(".categoria")?.textContent.toLowerCase() || "";
            
            if (title.includes(query) || desc.includes(query) || category.includes(query)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
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
