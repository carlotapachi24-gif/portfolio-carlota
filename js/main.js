// Smooth scroll para todos los links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  
  e.preventDefault();
  const targetId = link.getAttribute('href');
  const target = document.querySelector(targetId);
  
  if (target) {
    target.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
});

// Navbar scroll effect sutil
window.addEventListener('scroll', () => {
  const topBar = document.querySelector('.top-bar');
  if (window.scrollY > 50) {
    topBar.style.backdropFilter = 'blur(20px)';
    topBar.style.background = 'rgba(0,0,0,0.3)';
  } else {
    topBar.style.backdropFilter = 'none';
    topBar.style.background = 'transparent';
  }
});

// Menu hamburguesa toggle (opcional)
document.querySelector('.menu').addEventListener('click', () => {
  const menuLines = document.querySelector('.menu-lines');
  menuLines.classList.toggle('active');
});
