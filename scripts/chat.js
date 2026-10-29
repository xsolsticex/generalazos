const backBtn = document.querySelector('header .back button');
const inputField = document.querySelector('footer input');
const sendBtn = document.querySelector('footer button');
const mainContainer = document.querySelector('.main');

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
    mainContainer.scrollTop = mainContainer.scrollHeight;
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

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}
