'use strict'
document.addEventListener('DOMContentLoaded', function () {

  const images = document.getElementsByClassName('image');

  for(let i = 0; i< images.length; i++) {
  images[i].addEventListener('click', imageSwitch)
  }

  function imageSwitch() {
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');

    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');

    const arrayImages = Array.prototype.slice.call(images);
    const index = arrayImages.indexOf(this)
    document.getElementsByClassName('pannel')[index].classList.add('is-show');

  }

});
