const start = document.getElementById("start");

if (start) {
    start.addEventListener("click", () => {
        window.location.href = "/page/principal.html";
    });
}

// Register service worker if supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}
