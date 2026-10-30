const back = document.getElementById("back");
const unirse = document.getElementById("unirse");

// Parse URL params for dynamic activity details
const params = new URLSearchParams(window.location.search);
const title = params.get("title");
const desc = params.get("desc");
const image = params.get("image");
const category = params.get("category");
const distance = params.get("distance");
const datetime = params.get("datetime");

if (title) {
    const titleEl = document.getElementById("actividad-title");
    if (titleEl) titleEl.textContent = title;
}
if (desc) {
    const subtitleEl = document.getElementById("actividad-subtitle");
    if (subtitleEl) subtitleEl.textContent = desc;
    const detailEl = document.getElementById("actividad-detail");
    if (detailEl) detailEl.textContent = desc + " Disfruta de una experiencia enriquecedora compartiendo momentos únicos e intergeneracionales.";
}
if (image) {
    const imgEl = document.getElementById("actividad-img");
    if (imgEl) imgEl.src = image;
}
if (category) {
    const catEl = document.getElementById("actividad-category");
    if (catEl) catEl.textContent = category;
}
if (distance) {
    const distEl = document.getElementById("actividad-distance");
    if (distEl) distEl.textContent = distance;
}
if (datetime) {
    const timeEl = document.getElementById("actividad-datetime");
    if (timeEl) timeEl.textContent = datetime;
}

if (unirse) {
    unirse.addEventListener("click", () => {
        const isJoined = unirse.textContent === "Unirme";
        unirse.textContent = isJoined ? "Cancelar" : "Unirme";
        unirse.style.background = isJoined ? "#b32d05" : "#8a2be2";
    });
}

if (back) {
    back.addEventListener("click", () => {
        window.location.href = "principal.html";
    });
}
