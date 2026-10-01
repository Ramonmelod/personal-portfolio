// ===== i18n PT/EN =====
function setLang(lang) {
  const html = document.documentElement;
  html.classList.remove('pt', 'en');
  html.classList.add(lang);
  html.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('btnPt').classList.toggle('active', lang === 'pt');
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');
  try { localStorage.setItem('lang', lang); } catch (e) {}
}
(function () {
  let lang = 'pt';
  try {
    const stored = localStorage.getItem('lang');
    if (stored === 'pt' || stored === 'en') {
      lang = stored;
    } else if (!(navigator.language || '').startsWith('pt')) {
      lang = 'en'; // navegador não-PT abre em inglês por padrão
    }
  } catch (e) {}
  setLang(lang);
})();

// ===== Scroll reveal =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Fecha menu mobile ao clicar num link =====
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'))
);

// ===== Ano no rodapé =====
document.getElementById('year').textContent = new Date().getFullYear();
