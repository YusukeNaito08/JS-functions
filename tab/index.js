'user strict'
document.addEventListener('DOMContentLoaded',function () {

  const tabs = document.getElementsByClassName('tab')
  for(let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', tabSwitch);
  }

function tabSwitch() {
  document.getElementsByClassName('is-active')[0].classList.remove('is-active');
  this.classList.add('is-active');

  document.getElementsByClassName('is-show')[0].classList.remove('is-show');
  const arrayTabs = Array.prototype.slice.call(tabs); //配列状オブジェクトやコレクションを新しい配列に変換
  const index = arrayTabs.indexOf(this)
  document.getElementsByClassName('pannel')[index].classList.add('is-show');
};
});
