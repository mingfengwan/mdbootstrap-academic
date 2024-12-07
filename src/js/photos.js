import '../scss/photos.scss';

import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import {faCircle5, faCircle4, faCircle3, faCircle2, faCircle1} from '@fortawesome/pro-duotone-svg-icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
library.add(faChevronLeft, faChevronRight, faCircle5, faCircle4, faCircle3, faCircle2, faCircle1);
dom.watch();

import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });

// Create floating hearts avoiding the center area
const createHeart = () => {
    const heart = document.createElement('div');
    heart.className = 'heart';

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
    left > centerRect.left - 20 &&
    left < centerRect.right + 20 &&
    top > centerRect.top - 20 &&
    top < centerRect.bottom + 20
        );

    heart.style.left = `${left}px`;
    heart.style.top = `${top}px`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => heart.remove(), 10000);
};

// Call createHeart immediately
createHeart();

// Then generate hearts every 600ms
setInterval(createHeart, 600);