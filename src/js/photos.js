import '../scss/photos.scss';

import {faChevronLeft, faChevronRight} from '@fortawesome/pro-solid-svg-icons';
import {faFlower, faDiceFive, faDiceFour, faDiceThree, faDiceTwo, faDiceOne} from '@fortawesome/pro-duotone-svg-icons';
import {library, dom} from '@fortawesome/fontawesome-svg-core';

library.add(faChevronLeft, faChevronRight, faFlower, faDiceFive, faDiceFour, faDiceThree, faDiceTwo, faDiceOne);
dom.watch();

import {Carousel, initMDB} from "mdb-ui-kit";

initMDB({Carousel});

// Cache viewport dimensions and center div dimensions
let vw = window.innerWidth;
let vh = window.innerHeight;
let centerRect = document.querySelector('#photoCarousel').getBoundingClientRect();

window.addEventListener('resize', () => {
    vw = window.innerWidth;
    vh = window.innerHeight;
    centerRect = document.querySelector('#photoCarousel').getBoundingClientRect();
});

const colorClasses = ['flower-orange-yellow', 'flower-pink-red', 'flower-purple-blue'];
const colorClassesLength = colorClasses.length;

// Create floating icons avoiding the center area
const createIcon = () => {
    const wrapper = document.createElement('div');
    const icon = document.createElement('i');
    icon.className = "fa-duotone fa-solid fa-flower";
    wrapper.appendChild(icon);

    // Generate a random color class
    const randomColorClass = colorClasses[Math.floor(Math.random() * colorClassesLength)];

    // Apply the random color class to the icon
    icon.classList.add(randomColorClass);

    // Generate a random size for the icon
    const size = 20 + Math.random() * 40; // Size range: 20px to 60px
    icon.style.fontSize = `${size}px`;

    let left, top;

    do {
        // Generate random positions for the icon
        left = Math.random() * vw;
        top = Math.random() * vh;
    } while (
        // Ensure the icon is outside the center div
    left > centerRect.left - size &&
    left < centerRect.right + size &&
    top > centerRect.top - size &&
    top < centerRect.bottom + size
        );

    // Position the icon and set additional properties
    icon.style.left = `${left}px`;
    icon.style.top = `${top}px`;

    // Append the icon to the body
    document.body.appendChild(wrapper);

    // Remove the icon after the animation ends
    setTimeout(() => wrapper.remove(), 4000);
};

// Call createIcon immediately
createIcon();

// Then generate icons every 200ms
setInterval(createIcon, 200);