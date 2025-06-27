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

const form = document.getElementById("contact-form");

const nameInput = document.getElementById("full-name");
const reasonInput = document.getElementById("reason");
const messageInput = document.getElementById("message");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

const errorName = document.getElementById("error-name");
const errorReason = document.getElementById("error-reason");
const errorMessage = document.getElementById("error-message");
const errorContact = document.getElementById("error-contact");

const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownOptions = document.getElementById("dropdownOptions");
const selectedText = document.getElementById("selectedText");

// Mostrar opciones al hacer clic
dropdownToggle.addEventListener("click", () => {
  dropdownOptions.classList.toggle("hidden");
});

// Selección de opción del dropdown
dropdownOptions.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    const label = item.querySelector(".text-black").textContent;
    selectedText.textContent = label;
    reasonInput.value = item.dataset.value;

    // Oculta el error si elige algo válido
    errorReason.classList.add("hidden");
    dropdownToggle.classList.remove("border-red-500");

    dropdownOptions.classList.add("hidden");
  });
});

// Validación del formulario
form.addEventListener("submit", (e) => {
  let valid = true;

  // Validación del nombre
  if (!nameInput.value.trim()) {
    errorName.classList.remove("hidden");
    nameInput.classList.add("border-red-500");
    valid = false;
  } else {
    errorName.classList.add("hidden");
    nameInput.classList.remove("border-red-500");
  }

  // Validación del motivo (dropdown)
  const reasonText = selectedText.textContent.trim();
  const reasonValue = reasonInput.value.trim();

  if (!reasonValue || reasonText === "Selecciona una opción") {
    errorReason.classList.remove("hidden");
    dropdownToggle.classList.add("border-red-500");
    valid = false;
  } else {
    errorReason.classList.add("hidden");
    dropdownToggle.classList.remove("border-red-500");
  }

  // Validación del mensaje
  if (!messageInput.value.trim()) {
    errorMessage.classList.remove("hidden");
    messageInput.classList.add("border-red-500");
    valid = false;
  } else {
    errorMessage.classList.add("hidden");
    messageInput.classList.remove("border-red-500");
  }

  // Validación de contacto: al menos teléfono o correo
  const phoneValue = phoneInput.value.trim();
  const emailValue = emailInput.value.trim();

  if (!phoneValue && !emailValue) {
    errorContact.classList.remove("hidden");
    phoneInput.classList.add("border-red-500");
    emailInput.classList.add("border-red-500");
    valid = false;
  } else {
    errorContact.classList.add("hidden");
    phoneInput.classList.remove("border-red-500");
    emailInput.classList.remove("border-red-500");
  }

  if (!valid) {
    e.preventDefault(); // Evita el envío si hay errores
  }
});

// Texto titulaciones

const contactCard = document.getElementById("contact-card");
const hoverBox = document.getElementById("hover-box");
const typewriter = document.getElementById("typewriter");
const showBtn = document.getElementById("show-info-btn");

const message = `🎓 <strong>Titulaciones</strong>:
- Ingeniería Informática
<em>Universidad de Salamanca</em>
- Máster en Bolsa y Mercados Financieros
<em>EAE Business School</em>
- Máster en IA y Machine Learning
<em>IEBS Biztech School</em>

💼 <strong>Experiencia</strong>:
- Consultor tecnológico freelance y Diseñador web (2017 - presente)
- Desarrollador Fullstack en Tech Solutions para <em>Banco Santander</em> (2022 - 2025)`;

let timer;
let isVisible = false;

function startTyping() {
  clearInterval(timer);
  typewriter.innerHTML = "";
  let i = 0;
  timer = setInterval(() => {
    typewriter.innerHTML =
      message.slice(0, i) + "<span class='animate-pulse'>|</span>";
    i++;
    if (i > message.length) {
      clearInterval(timer);
      typewriter.innerHTML = message;
    }
  }, 8);
}

function showBox() {
  hoverBox.classList.remove("opacity-0", "pointer-events-none");
  hoverBox.classList.add("opacity-100");
  startTyping();
}

function hideBox() {
  hoverBox.classList.add("opacity-0", "pointer-events-none");
  hoverBox.classList.remove("opacity-100");
  clearInterval(timer);
}

// Hover en escritorio
contactCard.addEventListener("mouseenter", () => {
  if (window.innerWidth >= 1024) showBox();
});

contactCard.addEventListener("mouseleave", () => {
  if (window.innerWidth >= 1024) hideBox();
});

// Clic en móvil
showBtn.addEventListener("click", () => {
  if (isVisible) {
    hideBox();
    isVisible = false;
  } else {
    showBox();
    isVisible = true;
  }
});

document.addEventListener("click", function (e) {
  if (
    window.innerWidth < 1024 && // Solo en móviles
    isVisible && // Solo si la caja está visible
    !contactCard.contains(e.target) &&
    !showBtn.contains(e.target)
  ) {
    hideBox();
    isVisible = false;
  }
});