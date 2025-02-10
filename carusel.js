const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const indicatorsContainer = document.querySelector('.carousel-indicators');

let currentIndex = 0;

// Функция для обновления активного слайда
function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.remove('active'); // Убираем класс активного слайда
        if (index === currentIndex) {
            item.classList.add('active'); // Добавляем класс активного слайда
        }
    });

    // Обновление индикаторов
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active'); // Убираем активный класс с всех
        if (index === currentIndex) {
            indicator.classList.add('active'); // Добавляем активный класс текущему индикатору
        }
    });
}

// Переход к предыдущему слайду
function goToPrevious() {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    updateCarousel();
}

// Переход к следующему слайду
function goToNext() {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}

// Обработчик для мобильных устройств (события touch)
carouselWrapper.addEventListener('touchstart', function (e) {
    startTouchX = e.touches[0].clientX;
});

carouselWrapper.addEventListener('touchend', function (e) {
    endTouchX = e.changedTouches[0].clientX;

    if (startTouchX - endTouchX > 50) {
        goToNext(); // свайп влево
    }
    if (endTouchX - startTouchX > 50) {
        goToPrevious(); // свайп вправо
    }
});

// Обработчик для мыши (эмуляция свайпа)
carouselWrapper.addEventListener('mousedown', function (e) {
    startTouchX = e.clientX;
});

carouselWrapper.addEventListener('mouseup', function (e) {
    endTouchX = e.clientX;

    if (startTouchX - endTouchX > 50) {
        goToNext(); // свайп влево
    }
    if (endTouchX - startTouchX > 50) {
        goToPrevious(); // свайп вправо
    }
});

// Обработчики кнопок
prevButton.addEventListener('click', goToPrevious);
nextButton.addEventListener('click', goToNext);

// Инициализация индикаторов
function initializeIndicators() {
    for (let i = 0; i < carouselItems.length; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        indicator.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
        indicatorsContainer.appendChild(indicator);
    }
}

// Инициализация карусели
initializeIndicators();
updateCarousel();
