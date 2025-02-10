let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.news-slide');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    const carousel = document.querySelector('.news-carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextNewsSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevNewsSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Инициализация слайдера
showSlide(currentSlide);
