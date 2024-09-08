const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
 
let scrollAmount = 0;
const cardWidth = document.querySelector('.service-card').offsetWidth + 20; // Ancho de la tarjeta + gap
 
nextBtn.addEventListener('click', () => {
    if (scrollAmount <= carousel.scrollWidth - carousel.clientWidth - cardWidth) {
        scrollAmount += cardWidth;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }
});
 
prevBtn.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= cardWidth;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }
});