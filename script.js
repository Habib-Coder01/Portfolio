// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden') === false;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.innerHTML = open ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
  });
}

// Highlight the current page in the navbar
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach((a) => {
  if (a.dataset.page === current) a.classList.add('active');
});

// Project / research filter (only on projects.html)
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.showcase-card');
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterButtons.forEach((b) => {
      b.classList.remove('bg-indigo-600', 'text-white');
      b.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
    });
    btn.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200');
    btn.classList.add('bg-indigo-600', 'text-white');
    cards.forEach((card) => {
      const cats = card.dataset.category.split(' ');
      card.classList.toggle('hidden', !(filter === 'all' || cats.includes(filter)));
    });
  });
});

// Contact form validation (only on contact.html)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk || !form.message.value.trim()) {
      msg.className = 'text-sm font-semibold text-rose-600';
      msg.textContent = 'Please enter your name, a valid email and a message.';
      return;
    }
    msg.className = 'text-sm font-semibold text-teal-700';
    msg.textContent = 'Thank you! Your message has been sent (demo).';
    form.reset();
  });
}
