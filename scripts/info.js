const swiperEl = document.querySelector('.swiper');
if (swiperEl && typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 600,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

const siguienteBtn = document.getElementById('siguienteBtn');
const saltarSpan = document.getElementById('saltarSpan');

if (siguienteBtn) {
    siguienteBtn.addEventListener('click', () => {
        window.location.href = 'principal.html';
    });
}

if (saltarSpan) {
    saltarSpan.addEventListener('click', () => {
        window.location.href = 'principal.html';
    });
}
