"use strict"
let titles = document.querySelectorAll('.accordion-title');

for (let title of titles) {
    title.addEventListener('click', () => {
        title.classList.toggle('active');
        title.classList.toggle('passive');
    });
}

