import '../scss/photos.scss';

import {faChevronLeft, faChevronRight} from '@fortawesome/pro-solid-svg-icons';
import {faDiceFive, faDiceFour, faDiceThree, faDiceTwo, faDiceOne} from '@fortawesome/pro-duotone-svg-icons';
import {library, dom} from '@fortawesome/fontawesome-svg-core';

library.add(faChevronLeft, faChevronRight, faDiceFive, faDiceFour, faDiceThree, faDiceTwo, faDiceOne);
dom.watch();

import {Carousel, initMDB} from "mdb-ui-kit";

initMDB({Carousel});

// Create floating hearts avoiding the center area
const createHeart = () => {
    const heart = document.createElement('div');
    heart.className = 'heart';

    // Generate a random size for the heart
    const size = 20 + Math.random() * 40; // Size range: 20px to 60px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Get viewport dimensions and center div dimensions
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const center = document.querySelector('#photoCarousel');
    const centerRect = center.getBoundingClientRect();

    let left, top;

    do {
        // Generate random positions for the heart
        left = Math.random() * vw;
        top = Math.random() * vh;
    } while (
        // Ensure the heart is outside the center div
    left > centerRect.left - size &&
    left < centerRect.right + size &&
    top > centerRect.top - size &&
    top < centerRect.bottom + size
        );

    // Position the heart and set additional properties
    heart.style.left = `${left}px`;
    heart.style.top = `${top}px`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`; // Random animation duration
    heart.style.opacity = Math.random(); // Random opacity for variation

    // Append the heart to the body
    document.body.appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => heart.remove(), 10000);
};

// Call createHeart immediately
createHeart();

// Then generate hearts every 600ms
setInterval(createHeart, 600);