const menu = document.getElementById("menu");
const flashComponent = document.getElementById("flash-component");

function handleScroll() {
  
  if (window.innerWidth > 640) {
    const flashComponentHeight = flashComponent.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY >= flashComponentHeight) {
      menu.classList.add("fixed");
    } else {
      menu.classList.remove("fixed");
    }
  } else {
    
    menu.classList.remove("fixed");
  }
}


window.addEventListener("scroll", handleScroll);


window.addEventListener("resize", handleScroll);

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