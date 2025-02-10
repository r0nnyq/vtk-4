document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.getElementById('burger-button');
    const navMenu = document.getElementById('nav-menu');
    const menuItems = document.querySelectorAll('.menu-item');

    // Функция для переключения состояния бургер-меню
    const toggleMenu = () => {
        navMenu.classList.toggle('active');  // Переключаем видимость меню
        burgerButton.classList.toggle('open'); // Добавляем класс анимации для кнопки
    };

    // Обработчик для открытия/закрытия подменю
    menuItems.forEach((menuItem) => {
        const submenuToggle = menuItem.querySelector('a');
        submenuToggle.addEventListener('click', (e) => {
            // Проверяем, есть ли подменю
            if (menuItem.querySelector('.submenu')) {
                e.preventDefault();  // Предотвращаем переход по ссылке
                menuItem.classList.toggle('open');  // Переключаем отображение подменю
            }
        });
    });

    // Добавляем обработчик клика на бургер-меню
    burgerButton.addEventListener('click', toggleMenu);
});
