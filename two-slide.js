let index = 0;

function moveSlide(step) {
    const images = document.querySelector('.image-magic');
    const totalImages = document.querySelectorAll('.image-magic img').length;
    index = (index + step + totalImages) % totalImages;
    images.style.transform = `translateX(${-index * 100}%)`;
}
