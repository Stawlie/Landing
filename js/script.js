'use strict';

let scroll;

window.addEventListener("scroll", () => {
    scroll = window.scrollY;
    if (scroll >= 50) {
        header.classList.add('fixed');
    }
    else {
        header.classList.remove('fixed');
    }
});

const headerBurger = document.querySelector('.header__burger'),
    headerNav = document.querySelector('.header__nav'),
    body = document.querySelector('body'),
    header = document.querySelector('.header');


headerBurger.addEventListener('click', event => {

    if (!header.classList.contains('fixed')) {
        header.classList.add('fixed');
    } else if (header.classList.contains('fixed') && scroll < 50) {
        header.classList.remove('fixed');
    }

    headerBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');
});