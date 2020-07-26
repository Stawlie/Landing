'use strict';

let scroll;

const headerBurger = document.querySelector('.header-burger'),
    headerNav = document.querySelector('.header-nav'),
    body = document.querySelector('body'),
    header = document.querySelector('.header'),
    headerWrapper = document.querySelector('.header-wrapper');


window.addEventListener("scroll", () => {
    scroll = window.scrollY;
    if (scroll >= 50) {
        headerWrapper.classList.add('fixed');
        header.classList.add('fixed');
    }
    else {
        header.classList.remove('fixed');
        headerWrapper.classList.remove('fixed');
    }
});

headerBurger.addEventListener('click', event => {

    if (!header.classList.contains('fixed')) {
        header.classList.add('fixed');
        headerWrapper.classList.add('fixed');
    } else if (header.classList.contains('fixed') && scroll < 50) {
        header.classList.remove('fixed');
        headerWrapper.classList.remove('fixed');
    }

    headerBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');
});