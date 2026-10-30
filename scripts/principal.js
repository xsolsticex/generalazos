const profile = document.getElementById("profile");
const perfil = document.getElementById("perfil");
const cards = document.querySelectorAll(".card");
const searchInput = document.getElementById("searchInput");

if (cards.length > 0) {
    cards.forEach((item) => {
        item.addEventListener("click", () => {
            const title = item.querySelector(".description-title p")?.textContent || "Actividad";
            const desc = item.querySelector(".description > p")?.textContent || "Descripción de la actividad";
            const image = item.querySelector("img")?.src || "../images/background3.png";
            const category = item.querySelector(".categoria")?.textContent || "General";
            const distance = item.querySelector(".ubicacion .meta-item span")?.textContent || "1.0 Km";
            const day = item.querySelector(".ubicacion .dia")?.textContent || "Hoy";
            const time = item.querySelector(".ubicacion .meta-item:last-child span")?.textContent || "10:00";
            const datetime = `${day} · ${time}`;

            const url = `actividad.html?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(desc)}&image=${encodeURIComponent(image)}&category=${encodeURIComponent(category)}&distance=${encodeURIComponent(distance)}&datetime=${encodeURIComponent(datetime)}`;
            window.location.href = url;
        });
    });
}

if (profile) {
    profile.addEventListener("click", () => {
        window.location.href = "perfil.html";
    });
}

if (perfil) {
    perfil.addEventListener("click", () => {
        window.location.href = "perfil.html";
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

if (navInicio) navInicio.addEventListener("click", () => window.location.href = "principal.html");
if (navExplorar) navExplorar.addEventListener("click", () => window.location.href = "explorar.html");
if (navMensajes) navMensajes.addEventListener("click", () => window.location.href = "mensajes.html");
if (navPerfil) navPerfil.addEventListener("click", () => window.location.href = "perfil.html");
