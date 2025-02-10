// Открытие меню
document.querySelector('.location-vtk')?.addEventListener('click', function () {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.classList.toggle('hidden');
        overlay.style.display = overlay.classList.contains('hidden') ? 'none' : 'block';
    }
});
