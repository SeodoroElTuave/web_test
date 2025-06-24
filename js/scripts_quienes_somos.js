let sidebarOpen = false;

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-button");
const overlay = document.getElementById("overlay");

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;

  if (sidebarOpen) {
    // mostrar sidebar + overlay
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
    menuBtn.classList.add("hidden");

    // solo en móvil (<768px)
    if (window.innerWidth < 768) {
      document.body.classList.add("overflow-hidden");
    }
  } else {
    // ocultar sidebar + overlay
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    menuBtn.classList.remove("hidden");

    // solo en móvil
    if (window.innerWidth < 768) {
      document.body.classList.remove("overflow-hidden");
    }
  }
}


const vh = window.innerHeight;

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  // A partir del 20% de scroll de la primera pantalla, fundimos el texto1
  if (y > vh * 0.2) {
    text1.classList.add("opacity-0");
  } else {
    text1.classList.remove("opacity-0");
  }

  // A partir del 50% de scroll de la primera pantalla, mostramos el texto2
  if (y > vh * 0.5) {
    text2.classList.add("opacity-100");
  } else {
    text2.classList.remove("opacity-100");
  }
});

// Cierre automático si se hace clic fuera
document.addEventListener("click", function (event) {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnMenuButton = menuBtn.contains(event.target);

  if (sidebarOpen && !isClickInsideSidebar && !isClickOnMenuButton) {
    toggleSidebar();
  }
});

// Cambio de color de barrita de submenú
window.addEventListener("scroll", () => {
  const button = document.getElementById("menu-button");
  if (window.scrollY > 10) {
    button.classList.add(
      "bg-white/80",
      "border-white",
      "shadow-lg",
      "backdrop-blur-sm"
    );
  } else {
    button.classList.remove(
      "bg-white/80",
      "border-white",
      "shadow-lg",
      "backdrop-blur-sm"
    );
  }
});

// Cargar texto poco a poco, activar efecto css
document.addEventListener('DOMContentLoaded', () => {
      const elementos = document.querySelectorAll('.animate-item');

      const opciones = {
        root: null,             
        rootMargin: '0px',
        threshold: 0.1          
      };

      const observer = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observer.unobserve(entrada.target);
          }
        });
      }, opciones);

      elementos.forEach(el => observer.observe(el));
    });
