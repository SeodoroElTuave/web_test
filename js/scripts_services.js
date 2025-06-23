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

// Animación imágenes
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "blur-sm");
        entry.target.classList.add("opacity-100", "blur-none");
        observer.unobserve(entry.target); // Solo se anima una vez
      }
    });
  },
  {
    threshold: 0.3,
  }
);

document.querySelectorAll(".reveal-btn").forEach((btn) => {
  observer.observe(btn);
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

//Botón Automatización
document.getElementById("btn-automatizacion").addEventListener("click", () => {
  document
    .getElementById("automatizacion")
    .scrollIntoView({ behavior: "smooth" });
});

//Botón IA
document.getElementById("btn-IA").addEventListener("click", () => {
  document.getElementById("IA").scrollIntoView({ behavior: "smooth" });
});

//Botón Reporting
document.getElementById("btn-reporting").addEventListener("click", () => {
  document.getElementById("reporting").scrollIntoView({ behavior: "smooth" });
});

//Botón Diagnostico
document.getElementById("btn-diagnostico").addEventListener("click", () => {
  document.getElementById("diagnostico").scrollIntoView({ behavior: "smooth" });
});
