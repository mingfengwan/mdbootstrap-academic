import '../scss/photos.scss';

import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
library.add(faChevronLeft, faChevronRight);
dom.watch();

import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });