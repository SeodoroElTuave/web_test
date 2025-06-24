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


// Cierre automático si se hace clic fuera
document.addEventListener("click", function (event) {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnMenuButton = menuBtn.contains(event.target);

  if (sidebarOpen && !isClickInsideSidebar && !isClickOnMenuButton) {
    toggleSidebar();
  }
});

function toggleFAQ(index) {
  const answer = document.getElementById(`faq-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  const item = answer.parentElement;
  const isOpen = answer.classList.contains("max-h-96");

  // Cierra todos
  document.querySelectorAll('[id^="faq-"]').forEach((el) => {
    el.classList.remove("max-h-96");
    el.parentElement.classList.remove("open");
  });
  document
    .querySelectorAll('[id^="icon-"]')
    .forEach((i) => (i.textContent = "+"));

  if (!isOpen) {
    answer.classList.add("max-h-96");
    icon.textContent = "−";
    item.classList.add("open");
  }
}
