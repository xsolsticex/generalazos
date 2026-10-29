const chatItems = document.querySelectorAll(".chat-item");
const searchChat = document.getElementById("searchChat");

if (chatItems.length > 0) {
    chatItems.forEach(item => {
        item.addEventListener("click", () => {
            const name = item.getAttribute("data-name") || "Chat";
            const avatar = item.getAttribute("data-avatar") || "/images/icono_perfil_usuario.svg";
            window.location.href = `/page/chat.html?name=${encodeURIComponent(name)}&avatar=${encodeURIComponent(avatar)}`;
        });
    });
}

if (searchChat && chatItems.length > 0) {
    searchChat.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        chatItems.forEach(item => {
            const name = item.querySelector(".name")?.textContent.toLowerCase() || "";
            const preview = item.querySelector(".preview")?.textContent.toLowerCase() || "";
            if (name.includes(query) || preview.includes(query)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
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
