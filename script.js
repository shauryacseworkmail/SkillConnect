// ---------- Mobile navigation drawer ----------
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileDrawer = document.getElementById('mobileDrawer');

function closeDrawer(){
  mobileDrawer.classList.remove('is-open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  hamburgerBtn.innerHTML = '<svg class="icon"><use href="#i-menu"/></svg>';
}

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileDrawer.classList.toggle('is-open');
  hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  hamburgerBtn.innerHTML = isOpen
    ? '<svg class="icon"><use href="#i-close"/></svg>'
    : '<svg class="icon"><use href="#i-menu"/></svg>';
});

mobileDrawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// ---------- Search form ----------
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const service = document.getElementById('serviceInput').value.trim();
  const location = document.getElementById('locationInput').value.trim();
  // Hook up your search/filtering logic here.
});

// ---------- Location pill ----------
document.querySelector('.location-pill').addEventListener('click', () => {
  const locationInput = document.getElementById('locationInput');
  if (locationInput) locationInput.focus();
});

// ---------- Navbar shadow on scroll ----------
const navbar = document.getElementById('navbar');
let lastScrolled = false;
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 8;
  if (scrolled !== lastScrolled){
    navbar.style.boxShadow = scrolled ? '0 6px 20px rgba(19,27,49,.06)' : 'none';
    lastScrolled = scrolled;
  }
}, { passive: true });