'use strict';

document.getElementById('js-btn').addEventListener('click',humburger, false);

function humburger() {
 document.getElementById('js_line1').classList.toggle('line_1');
 document.getElementById('js_line2').classList.toggle('line_2');
 document.getElementById('js_line3').classList.toggle('line_3');
 document.getElementById('nav').classList.toggle('in');
}
