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
