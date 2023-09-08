const menu = document.getElementById("menu");
const flashComponent = document.getElementById("flash-component");

function handleScroll() {
  // Verifica a largura da janela
  if (window.innerWidth > 640) {
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
  } else {
    // Se a largura da janela for menor ou igual a 640px, remova a classe "fixed" do menu
    menu.classList.remove("fixed");
  }
}

// Adicione um ouvinte de evento de scroll à janela
window.addEventListener("scroll", handleScroll);

// Adicione um ouvinte de evento de redimensionamento da janela
window.addEventListener("resize", handleScroll);

// Chame a função handleScroll para verificar o estado inicial da página
handleScroll();


document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("header a");

  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
});