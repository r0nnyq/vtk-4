const customPrevButton = document.getElementById('customPrev');
const customNextButton = document.getElementById('customNext');
const customCarousel = document.getElementById('customCarousel');

let customCurrentIndex = 0;
const customItemsPerPage = 5; // Показываем 5 карточек на одной странице

// Получаем все карточки
const customCards = document.querySelectorAll('.custom-card');

function updateCarousel() {
    customCards.forEach((card, index) => {
        if (index >= customCurrentIndex && index < customCurrentIndex + customItemsPerPage) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Логика скрытия кнопок навигации
    customPrevButton.style.display = customCurrentIndex === 0 ? 'none' : 'block';
    customNextButton.style.display = customCurrentIndex + customItemsPerPage >= customCards.length ? 'none' : 'block';
}

// Обработчики событий для кнопок навигации
customPrevButton.addEventListener('click', () => {
    if (customCurrentIndex > 0) {
        customCurrentIndex -= customItemsPerPage;
        updateCarousel();
    }
});

customNextButton.addEventListener('click', () => {
    if (customCurrentIndex + customItemsPerPage < customCards.length) {
        customCurrentIndex += customItemsPerPage;
        updateCarousel();
    }
});

// Инициализация карусели
updateCarousel();