const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const sidePanelText = document.querySelector('.sidepanel__text span');
const sidePanelDivider = document.querySelector('.sidepanel__divider');
const sidePanelLink = document.querySelectorAll('.sidepanel__link svg path');
const promo = document.querySelector('section');

window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY;
    const promoHeight = promo.offsetHeight;

    function changeColor(scrollSize, item) {
        if (verticalScrollPx >= scrollSize) {
            item.classList.add('dark');
        } else {
            item.classList.remove('dark');
        }
    }
    changeColor(promoHeight / 3, sidePanelText);
    changeColor(promoHeight / 2.25, sidePanelDivider);
    sidePanelLink.forEach(el => changeColor(promoHeight / 1.65, el));
});

const counters = document.querySelectorAll('.skills__percentage-counter'),
    lines = document.querySelectorAll('.skills__percentage-scale span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});