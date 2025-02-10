document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена');

    const vtkName = document.getElementById('vtkName');
    const logo = document.getElementById('logo'); // Получаем логотип

    if (vtkName && logo) {
        console.log('Элементы найдены:', vtkName, logo);

        // Добавляем обработчик клика только на логотип
        logo.addEventListener('click', function() {
            console.log('Клик на логотипе'); // Проверяем, что событие срабатывает на логотип

            // Плавная анимация исчезновения
            vtkName.style.opacity = 0;
            vtkName.style.visibility = 'hidden'; // Устанавливаем скрытие элемента

            console.log('Установлены opacity и visibility');
        });
    } else {
        console.log('Один или оба элемента не найдены');
    }
});
