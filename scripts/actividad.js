const back = document.getElementById("back");
const unirse = document.getElementById("unirse");

if (unirse) {
    unirse.addEventListener("click", () => {
        const isJoined = unirse.textContent === "Unirme";
        unirse.textContent = isJoined ? "Cancelar" : "Unirme";
        unirse.style.background = isJoined ? "#b32d05" : "#8a2be2";
    });
}

if (back) {
    back.addEventListener("click", () => {
        window.location.href = "/page/principal.html";
    });
}
