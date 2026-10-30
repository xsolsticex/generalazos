const backBtn = document.querySelector('.buttons button');
const enviarMsgBtn = document.querySelector('.info .content button');

if (backBtn) {
    backBtn.addEventListener('click', () => {
        window.location.href = 'principal.html';
    });
}

if (enviarMsgBtn) {
    enviarMsgBtn.addEventListener('click', () => {
        window.location.href = 'chat.html';
    });
}
