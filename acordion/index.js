'use strict';

const menu = document.querySelectorAll('.js-menu');

function toggle() {
 const contents = this.nextElementSibling;
 contents.classList.toggle('is_open');
}

for(let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", toggle);
}
