const menuButton = document.getElementById('menuButton');
const navigation = document.getElementById('nav');

menuButton.addEventListener('click', e => {
  menuButton.classList.toggle('active');
  navigation.classList.toggle('open');
  e.stopPropagation();
});

document.addEventListener('click', () => {
    menuButton.classList.remove('active');
    navigation.classList.remove('open');
  });