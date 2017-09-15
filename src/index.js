import Brick from './assets/brick.jpg';
import EP from './assets/ep.jpg';
import '../node_modules/reset-css/reset.css'
import './styles/site.css'

import './scripts/site.js'



document.addEventListener("DOMContentLoaded", (e) => {
  const albumCover = document.querySelector('.me');
  albumCover.src = EP;
})
