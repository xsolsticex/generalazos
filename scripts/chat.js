const backBtn = document.querySelector('header .back button');
const inputField = document.querySelector('footer input');
const sendBtn = document.querySelector('footer button');
const mainContainer = document.querySelector('.main');
const chat = document.getElementById("chat");

// Read URL query parameters for contact details
const urlParams = new URLSearchParams(window.location.search);
const nameParam = urlParams.get('name');
const avatarParam = urlParams.get('avatar');

if (nameParam) {
    const nameSpan = document.querySelector('header .profile span');
    if (nameSpan) nameSpan.textContent = nameParam;
}

if (avatarParam) {
    const avatarImg = document.querySelector('header .profile img');
    if (avatarImg) avatarImg.src = avatarParam;
}

if (backBtn) {
    backBtn.addEventListener('click', () => {
        window.location.href = '/page/mensajes.html';
    });
}

function sendMessage() {
    if (!inputField || !mainContainer) return;
    const text = inputField.value.trim();
    if (!text) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = 'mensaje msg-receptor';
    msgDiv.innerHTML = `
        <div class="contenido">
            <p>${escapeHTML(text)}</p>
        </div>
    `;
    mainContainer.appendChild(msgDiv);
    inputField.value = '';
    scrollToBottom();
}

if (sendBtn) {
    sendBtn.addEventListener('click', sendMessage);
}

if (inputField) {
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function scrollToBottom() {
    if (!chat) return;
    chat.scrollTo({
        top: chat.scrollHeight,
        behavior: "smooth"
    });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// Ensure autoscroll to bottom on page load
window.addEventListener('load', () => {
    scrollToBottom();
});

scrollToBottom();
requestAnimationFrame(scrollToBottom);
setTimeout(scrollToBottom, 50);
