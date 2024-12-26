import '../scss/photos.scss';

import {faChevronLeft, faChevronRight} from '@fortawesome/pro-solid-svg-icons';
import {faSun, faDiceFive, faDiceFour, faDiceThree, faDiceTwo, faDiceOne} from '@fortawesome/pro-duotone-svg-icons';
import {library, dom} from '@fortawesome/fontawesome-svg-core';

library.add(faChevronLeft, faChevronRight, faSun, faDiceFive, faDiceFour, faDiceThree, faDiceTwo, faDiceOne);
dom.watch();

import {Carousel, initMDB} from "mdb-ui-kit";

initMDB({Carousel});

// Create floating suns avoiding the center area
const createSun = () => {
    const wrapper = document.createElement('div');
    const sun = document.createElement('i');
    sun.className = "fa-duotone fa-solid fa-sun fa-beat-fade";
    wrapper.appendChild(sun);

    // Generate a random size for the sun
    const size = 70 + Math.random() * 100; // Size range: 70px to 100px
    sun.style.width = `${size}px`;
    sun.style.height = `${size}px`;

    // Get viewport dimensions and center div dimensions
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const center = document.querySelector('#photoCarousel');
    const centerRect = center.getBoundingClientRect();

    let left, top;

    do {
        // Generate random positions for the sun
        left = Math.random() * vw;
        top = Math.random() * vh;
    } while (
        // Ensure the sun is outside the center div
    left > centerRect.left - size &&
    left < centerRect.right + size &&
    top > centerRect.top - size &&
    top < centerRect.bottom + size
        );

    // Position the sun and set additional properties
    sun.style.left = `${left}px`;
    sun.style.top = `${top}px`;

    // Append the sun to the body
    document.body.appendChild(wrapper);

    // Remove the sun after the animation ends
    setTimeout(() => wrapper.remove(), 10000);
};

// Call createSun immediately
createSun();

// Then generate suns every 1000ms
setInterval(createSun, 1000);