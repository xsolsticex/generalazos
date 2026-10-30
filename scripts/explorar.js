const profile = document.getElementById("profile");
const cards = document.querySelectorAll(".card");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");

if (cards.length > 0) {
    cards.forEach((item) => {
        item.addEventListener("click", () => {
            const title = item.querySelector(".description-title p")?.textContent || "Actividad";
            const desc = item.querySelector(".description > p")?.textContent || "Descripción de la actividad";
            const image = item.querySelector("img")?.src || "/images/background3.png";
            const category = item.querySelector(".categoria")?.textContent || "General";
            const distance = item.querySelector(".ubicacion .meta-item span")?.textContent || "1.0 Km";
            const day = item.querySelector(".ubicacion .dia")?.textContent || "Hoy";
            const time = item.querySelector(".ubicacion .meta-item:last-child span")?.textContent || "10:00";
            const datetime = `${day} · ${time}`;

            const url = `/page/actividad.html?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(desc)}&image=${encodeURIComponent(image)}&category=${encodeURIComponent(category)}&distance=${encodeURIComponent(distance)}&datetime=${encodeURIComponent(datetime)}`;
            window.location.href = url;
        });
    });
}

if (profile) {
    profile.addEventListener("click", () => {
        window.location.href = "/page/perfil.html";
    });
}

// Filtering by category & search query
function filterActivities() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const activeBtn = document.querySelector(".filter-btn.active");
    const activeCategory = activeBtn ? activeBtn.getAttribute("data-category") : "all";

    cards.forEach((card) => {
        const title = card.querySelector(".description-title p")?.textContent.toLowerCase() || "";
        const desc = card.querySelector(".description > p")?.textContent.toLowerCase() || "";
        const category = card.getAttribute("data-category") || "";

        const matchesQuery = title.includes(query) || desc.includes(query) || category.includes(query);
        const matchesCategory = activeCategory === "all" || category === activeCategory;

        if (matchesQuery && matchesCategory) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

if (searchInput) {
    searchInput.addEventListener("input", filterActivities);
}

if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterActivities();
        });
    });
}

// Footer Navigation
const navInicio = document.getElementById("nav-inicio");
const navExplorar = document.getElementById("nav-explorar");
const navMensajes = document.getElementById("nav-mensajes");
const navPerfil = document.getElementById("nav-perfil");

if (navInicio) navInicio.addEventListener("click", () => window.location.href = "/page/principal.html");
if (navExplorar) navExplorar.addEventListener("click", () => window.location.href = "/page/explorar.html");
if (navMensajes) navMensajes.addEventListener("click", () => window.location.href = "/page/mensajes.html");
if (navPerfil) navPerfil.addEventListener("click", () => window.location.href = "/page/perfil.html");
