const button = document.querySelector('.icon-button');
const icon = document.querySelector('.icon');
let isFirstIcon = true;

button.addEventListener('click', () => {
  if (isFirstIcon) {
    icon.src = 'svg/icon_02.svg';
  } else {
    icon.src = 'svg/icon_01.svg';
  }
  isFirstIcon = !isFirstIcon;
});
