const swiperEl = document.querySelector('.swiper');
if (swiperEl && typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 600,
    });
}

const siguienteBtn = document.querySelector('.bottom button');
const saltarSpan = document.querySelector('.bottom span');

if (siguienteBtn) {
    siguienteBtn.addEventListener('click', () => {
        window.location.href = '/page/principal.html';
    });
}

if (saltarSpan) {
    saltarSpan.addEventListener('click', () => {
        window.location.href = '/page/principal.html';
    });
}
