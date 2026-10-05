const menu = document.querySelector('.lesson-menu');
if (menu) {
  const smallScreen = window.matchMedia('(max-width: 760px)');
  const setMenu = () => { menu.open = !smallScreen.matches; };
  setMenu();
  smallScreen.addEventListener('change', setMenu);
  menu.addEventListener('toggle', () => { if (!smallScreen.matches && !menu.open) menu.open = true; });
}
