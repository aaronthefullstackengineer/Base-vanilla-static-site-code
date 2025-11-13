import { initThemeToggle } from "./JS lib/Global/light-dark-mode.js";
import { initCardSearch } from './JS lib/Global/search.js';
import {  loadHeader  } from "./JS lib/Global/Modules/header-module.js";


//--------------------
initCardSearch(); // uses default selectors

initThemeToggle(); // by default looks for #theme-toggle

loadHeader(); // header module