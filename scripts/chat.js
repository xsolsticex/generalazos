document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.querySelector('header .back button');
    const inputField = document.querySelector('footer input');
    const sendBtn = document.querySelector('footer button');
    const mainContainer = document.querySelector('.main');
    const chat = document.getElementById("chat");

    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name') || 'Ana Lopez';
    const avatarParam = urlParams.get('avatar');

    if (nameParam) {
        const nameSpan = document.querySelector('header .profile span');
        if (nameSpan) nameSpan.textContent = nameParam;
    }

    if (avatarParam) {
        const avatarImg = document.querySelector('header .profile img');
        if (avatarImg) avatarImg.src = avatarParam;
    }

    const conversations = {
        "ana lopez": [
            { sender: "emisor", text: "¡Hola! ¿Qué tal estás? Me alegro mucho de saludarte por aquí." },
            { sender: "receptor", text: "¡Hola Ana! Todo muy bien por aquí, gracias. ¿Qué planes tienes para esta semana?" },
            { sender: "emisor", text: "Pues había pensado en dar un paseo por el parque o visitar la exposición del museo. ¿Te apetece acompañarme?" },
            { sender: "receptor", text: "¡Claro que sí! Me encantaría ir al museo contigo." },
            { sender: "emisor", text: "¡Perfecto! Quedamos este jueves por la tarde entonces." }
        ],
        "diego r": [
            { sender: "emisor", text: "Hola, ¿confirmamos la ruta de senderismo para mañana?" },
            { sender: "receptor", text: "¡Hola Diego! Sí, todo listo. ¿A qué hora quedamos en el punto de encuentro?" },
            { sender: "emisor", text: "Perfecto, nos vemos para el paseo matutino a las 9:00." },
            { sender: "receptor", text: "Allí estaré puntual con la mochila y agua." }
        ],
        "carmen g": [
            { sender: "emisor", text: "¡Hola! ¿Cómo van los preparativos para las plantas aromáticas?" },
            { sender: "receptor", text: "¡Hola Carmen! Quedaron genial en las macetas nuevas. Gracias por la ayuda con el taller de huerto." },
            { sender: "emisor", text: "Me alegra un montón. ¡La semana que viene plantaremos tomates!" },
            { sender: "receptor", text: "¡Apuntado! Seguro que nos quedan estupendos." }
        ]
    };

    function getConversation(name) {
        if (!name) return conversations["ana lopez"];
        const cleanName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
        
        for (const key of Object.keys(conversations)) {
            const cleanKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
            if (cleanKey === cleanName || cleanKey.includes(cleanName) || cleanName.includes(cleanKey)) {
                return conversations[key];
            }
        }

        return [
            { sender: "emisor", text: `¡Hola! Qué gusto saludarte, ${name}.` },
            { sender: "receptor", text: `¡Hola! Todo excelente por aquí.` },
            { sender: "emisor", text: `Hablamos pronto para la próxima actividad.` }
        ];
    }

    function appendMessage(sender, text) {
        if (!chat) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = `mensaje msg-${sender}`;
        
        let emisorHTML = '';
        if (sender === 'emisor') {
            const avatarSrc = avatarParam || '../images/icono_perfil_usuario.svg';
            emisorHTML = `
                <div class="emisor">
                    <img src="${escapeHTML(avatarSrc)}" alt="">
                </div>
            `;
        } else {
            emisorHTML = `
                <div class="emisor" hidden>
                    <img src="../images/icono_perfil_usuario.svg" alt="">
                </div>
            `;
        }

        msgDiv.innerHTML = `
            ${emisorHTML}
            <div class="contenido">
                <p>${escapeHTML(text)}</p>
            </div>
        `;
        chat.appendChild(msgDiv);
        scrollToBottom();
    }

    function showTypingIndicator(sender) {
        if (!chat) return;
        removeTypingIndicator();
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        const avatarSrc = avatarParam || '../images/icono_perfil_usuario.svg';
        
        let emisorHTML = sender === 'emisor' ? `
            <div class="emisor">
                <img src="${escapeHTML(avatarSrc)}" alt="">
            </div>
        ` : '';

        typingDiv.innerHTML = `
            ${emisorHTML}
            <div class="contenido" style="display: flex; flex-direction: row; align-items: center; gap: 4px; padding: 10px 14px; background: ${sender === 'receptor' ? '#d1fae5' : '#e0f2fe'};">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        chat.appendChild(typingDiv);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const existing = document.getElementById('typingIndicator');
        if (existing) existing.remove();
    }

    // Play conversation sequentially with typing simulation
    function playAnimatedConversation() {
        if (!chat) return;
        chat.innerHTML = '';
        const messages = getConversation(nameParam);
        let index = 0;

        function nextMessage() {
            if (index >= messages.length) return;
            const msg = messages[index];
            
            showTypingIndicator(msg.sender);
            
            setTimeout(() => {
                removeTypingIndicator();
                appendMessage(msg.sender, msg.text);
                index++;
                if (index < messages.length) {
                    setTimeout(nextMessage, 1200);
                }
            }, 1500);
        }

        setTimeout(nextMessage, 500);
    }

    playAnimatedConversation();

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = 'mensajes.html';
        });
    }

    function sendMessage() {
        if (!inputField || !chat) return;
        const text = inputField.value.trim();
        if (!text) return;

        appendMessage('receptor', text);
        inputField.value = '';

        setTimeout(() => {
            showTypingIndicator('emisor');
            setTimeout(() => {
                removeTypingIndicator();
                appendMessage('emisor', '¡Entendido! Me parece genial.');
            }, 1500);
        }, 1000);
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
});
