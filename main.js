const menu = document.getElementById("menu");
const flashComponent = document.getElementById("flash-component");

window.addEventListener("scroll", () => {
  // Obtém a altura do componente flash
  const flashComponentHeight = flashComponent.offsetHeight;
  // Obtém a posição atual do scroll vertical
  const scrollY = window.scrollY;
  
  if (scrollY >= flashComponentHeight) {
    // Quando o scroll atinge a altura do componente flash
    menu.classList.add("fixed");
  } else {
    // Quando o scroll está acima da altura do componente flash
    menu.classList.remove("fixed");
  }
});