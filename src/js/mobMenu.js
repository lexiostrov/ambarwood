const menuBtnEl = document.querySelector('.headerBtnMenu');
const mobMenuEl = document.querySelector('.mobMenu');

menuBtnEl.addEventListener('click', onClickMenu);

function onClickMenu() {
  mobMenuEl.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
