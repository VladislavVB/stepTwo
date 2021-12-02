const mainScreenButton = document.querySelector('.main-screen-button');
const closeSafari = document.querySelector('.closeSafari');
const safari = document.querySelector('.safari');

mainScreenButton.onclick = () => {
  safari.classList.add('active');
}

closeSafari.onclick = () => {
  safari.classList.remove('active');
}