const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.menu-close');
const backdrop = document.querySelector('.menu-backdrop');

function setMenu(open) {
  menu.classList.toggle('open', open);
  menu.setAttribute('aria-hidden', String(!open));
  toggle.setAttribute('aria-expanded', String(open));
  backdrop.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
}

toggle?.addEventListener('click', () => setMenu(true));
closeBtn?.addEventListener('click', () => setMenu(false));
backdrop?.addEventListener('click', () => setMenu(false));
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
