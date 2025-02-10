document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const linesContainer = document.getElementById('lines-container');
    const vtkName = document.getElementById('vtkName');

    const specialties = ['Программист', 'Системный администратор', 'Дизайнер', 'Маркетолог'];

    logo.addEventListener('click', function() {
        // Скрываем vtkName
        vtkName.style.opacity = 0;
        vtkName.style.visibility = 'hidden';

        // Добавляем линии и текст
        specialties.forEach((specialty, index) => {
            // Создаем кривую линию
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            line.setAttribute('class', 'line');
            const xStart = 0;
            const yStart = 0;
            const xEnd = (Math.random() * 200) + 100; // Случайная длина линии
            const yEnd = (Math.random() * 200) + 100; // Случайная длина линии
            line.setAttribute('d', `M${xStart} ${yStart} Q${xEnd} ${yEnd} ${xEnd} ${yEnd}`);
            linesContainer.appendChild(line);

            // Добавляем текст на конце линии
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('class', 'text');
            text.setAttribute('x', xEnd);
            text.setAttribute('y', yEnd);
            text.textContent = specialty;
            linesContainer.appendChild(text);

            // Применяем анимацию
            setTimeout(() => {
                line.classList.add('line-animated');
                text.classList.add('text-animated');
            }, index * 500); // Задержка между анимациями для каждого текста и линии
        });
    });
});
