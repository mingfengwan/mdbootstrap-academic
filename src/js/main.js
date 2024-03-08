import '../scss/styles.scss';

import * as mdb from 'mdb-ui-kit'; // lib
window.mdb = mdb;

// Initialization for ES Users
import { Collapse, Tooltip, Ripple, Carousel, initMDB } from "mdb-ui-kit";
initMDB({ Collapse, Tooltip, Ripple, Carousel });

import '@fortawesome/fontawesome-pro/js/fontawesome.min.js';
import '@fortawesome/fontawesome-pro/js/duotone.min.js';
import '@fortawesome/fontawesome-pro/js/brands.min.js';