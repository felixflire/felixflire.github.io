function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  
  pages.forEach(page => {
    page.style.display = 'none';
  });

  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.style.display = (pageId === 'about') ? 'flex' : 'block';
  }
}

// 1. Put the listener here - it only runs ONCE
document.addEventListener('click', (event) => {
  if (event.target.matches('.navbar a')) {
    event.preventDefault();
    const pageId = event.target.getAttribute('href').substring(1);
    showPage(pageId);
  }
});

// 2. Initialize the first page
document.addEventListener('DOMContentLoaded', () => {
  showPage('about');
});
