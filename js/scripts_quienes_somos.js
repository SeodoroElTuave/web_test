let sidebarOpen = false;

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-button");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  if (sidebarOpen) {
    sidebar.classList.remove("-translate-x-full");
    menuBtn.classList.add("hidden");
  } else {
    sidebar.classList.add("-translate-x-full");

    // Retrasar la aparición del botón 300ms
    setTimeout(() => {
      menuBtn.classList.remove("hidden");
    }, 300);
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
