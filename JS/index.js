import { initThemeToggle } from "./JS lib/Global/light-dark-mode.js";
import { initCardSearch } from './JS lib/Global/search.js';
import {  loadHeader  } from "./JS lib/Global/Modules/header-module.js";
import { loaderfooter } from "./JS lib/Global/Modules/footer-module.js";
import { loadMenuModule } from "./JS lib/Global/Modules/menu-module.js";
import { loadNavbarGlass } from "./JS lib/Global/navbar-glass.js";


//--------------------
initCardSearch(); // uses default selectors

initThemeToggle(); // by default looks for #theme-toggle

loadHeader(); // header module

loaderfooter(); // footer module

loadMenuModule(); //Menu Module

loadNavbarGlass(); // Navbar Glass