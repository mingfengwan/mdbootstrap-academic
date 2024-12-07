import '../scss/photos.scss';

import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import {faCircle5, faCircle4, faCircle3, faCircle2, faCircle1} from '@fortawesome/pro-duotone-svg-icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
library.add(faChevronLeft, faChevronRight, faCircle5, faCircle4, faCircle3, faCircle2, faCircle1);
dom.watch();

import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });