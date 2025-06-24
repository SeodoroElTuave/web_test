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
      setTimeout(typeWriter, 18);
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


 document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video.auto-play-video');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (entry.isIntersecting) {
          vid.play().catch(() => {
            console.warn('Autoplay bloqueado en ', vid);
          });
          // dejamos de observar este vídeo (no queremos re-disparar un replay automático)
          obs.unobserve(vid);
        }
      });
    }, {
      threshold: 0.5 // al menos 50% visible
    });

    // arrancamos la observación en todos
    videos.forEach(v => {
      observer.observe(v);
      // al acabar, nos quedamos en el último fotograma
      v.addEventListener('ended', () => {
        v.pause();
        v.currentTime = v.duration;
      });
    });
  }); 