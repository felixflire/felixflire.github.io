// ── PAGE SWITCHING ──
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show the selected page
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    // Scroll to the top of the pages area smoothly
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    }
  });
}

// ── NAV LINK CLICKS ──
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.getAttribute('data-page');
    showPage(pageId);
    // Close mobile menu if open
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── HERO BUTTON CLICKS (data-goto) ──
document.querySelectorAll('[data-goto]').forEach(btn => {
  btn.addEventListener('click', () => {
    const pageId = btn.getAttribute('data-goto');
    showPage(pageId);
  });
});

// ── MOBILE HAMBURGER MENU ──
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ── INIT: show About on load ──
document.addEventListener('DOMContentLoaded', () => {
  showPage('about');
});
