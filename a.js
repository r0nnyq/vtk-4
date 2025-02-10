function expandBox(clickedId) {
    const clickedElement = document.getElementById(clickedId);

    const isExpanded = clickedElement.classList.contains('expand-down') || clickedElement.classList.contains('expand-left');

    if (isExpanded) {
        closeBox(clickedId);
    } else {
        openBox(clickedId);
    }
}

function openBox(clickedId) {
    const clickedElement = document.getElementById(clickedId);

    clickedElement.classList.remove('expand-down', 'expand-left', 'expand-down-close', 'expand-left-close');

    setTimeout(() => {
        clickedElement.classList.add('expand-down');
    }, 10);

    setTimeout(() => {
        clickedElement.classList.add('expand-left');
    }, 500);

    const closeBtn = clickedElement.querySelector('.close-btn');
    closeBtn.style.display = 'block'; 

    clickedElement.style.zIndex = '9999'; 
}

function closeBox(clickedId) {
    const clickedElement = document.getElementById(clickedId);

    clickedElement.classList.add('expand-down-close');
    clickedElement.classList.add('expand-left-close');

    const closeBtn = clickedElement.querySelector('.close-btn');
    closeBtn.style.display = 'none';

    setTimeout(() => {
        clickedElement.classList.remove('expand-down-close', 'expand-left-close');

        clickedElement.classList.remove('expand-down', 'expand-left');

        clickedElement.style.zIndex = ''; 
    }, 500); 
}
