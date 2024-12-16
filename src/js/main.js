import '../scss/main.scss';

// Initialization for ES Users
import { Collapse, Tooltip, Ripple, ScrollSpy, initMDB } from "mdb-ui-kit";
initMDB({ Collapse, Tooltip, Ripple, ScrollSpy });

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faPersonDressSimple } from '@fortawesome/duotone-regular-svg-icons/faPersonDressSimple';
import { faEnvelope } from '@fortawesome/sharp-duotone-regular-svg-icons/faEnvelope';
import { faSparkles, faCommentSmile, faGlasses, faChartMixedUpCircleDollar, faFilePowerpoint, faFileLines, faFileCode, faHashtag, faBookOpen, faPresentationScreen, faVideo, faBookOpenReader, faChalkboardUser, faLocationDot, faSnowflake } from '@fortawesome/pro-duotone-svg-icons';
import { faBars, faAngleDown } from '@fortawesome/pro-solid-svg-icons';
import { faImage } from '@fortawesome/duotone-light-svg-icons/faImage';
import { faGithubAlt, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faPersonDressSimple, faImage, faBars, faEnvelope, faAngleDown, faSparkles, faCommentSmile, faGlasses, faChartMixedUpCircleDollar, faFilePowerpoint, faFileLines, faFileCode, faHashtag, faBookOpen, faPresentationScreen, faVideo, faBookOpenReader, faChalkboardUser, faLocationDot, faSnowflake, faGithubAlt, faLinkedinIn, faYoutube);
dom.watch();

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbarScroll");
    if (window.scrollY > 50) { // Detect scroll past 50px
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

