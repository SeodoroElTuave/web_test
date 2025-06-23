let sidebarOpen = false;

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-button");

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

const text = `Digitalizar tu negocio no es fácil, lo sabemos.\nPero con nosotros, puede ser más rápido, rentable y sorprendentemente sencillo.`;
  const target = document.getElementById("terminal-text");

  let index = 0;
  let hasAnimated = false;

  function typeWriter() {
    if (index < text.length) {
      const char = text[index] === '\n' ? '<br/>' : text[index];
      target.innerHTML += char;
      index++;
      setTimeout(typeWriter, 35);
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          typeWriter();
        }
      });
    },
    { threshold: 0.5 } // se activa cuando el 50% del elemento es visible
  );

  observer.observe(target);
