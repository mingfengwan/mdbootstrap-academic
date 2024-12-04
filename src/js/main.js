import '../scss/styles.scss';

import * as mdb from 'mdb-ui-kit'; // lib
window.mdb = mdb;

// Initialization for ES Users
import { Collapse, Tooltip, Ripple, initMDB } from "mdb-ui-kit";
initMDB({ Collapse, Tooltip, Ripple });

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faPersonDressSimple, faEnvelope, faSparkles, faCommentSmile, faGlasses, faChartMixedUpCircleDollar, faFilePowerpoint, faFileLines, faFileCode, faHashtag, faBookOpen, faPresentationScreen, faVideo, faBookOpenReader, faChalkboardUser, faLocationDot, faSnowflake } from '@fortawesome/pro-duotone-svg-icons';
import { faBars, faAngleDown } from '@fortawesome/pro-solid-svg-icons';
import { faGithubAlt, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faPersonDressSimple, faBars, faEnvelope, faAngleDown, faSparkles, faCommentSmile, faGlasses, faChartMixedUpCircleDollar, faFilePowerpoint, faFileLines, faFileCode, faHashtag, faBookOpen, faPresentationScreen, faVideo, faBookOpenReader, faChalkboardUser, faLocationDot, faSnowflake, faGithubAlt, faLinkedinIn, faYoutube);
dom.watch();