// Small interactions
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Scroll suave
  document.querySelectorAll('.nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth'});
        // fecha o menu ao clicar em um link no mobile
        const nav = document.getElementById('primary-nav');
        const hamburger = document.getElementById('hamburger');
        if (window.matchMedia('(max-width: 880px)').matches){
          nav.classList.remove('open');
          hamburger.classList.remove('is-open');
          hamburger.setAttribute('aria-expanded','false');
        }
      }
    });
  });

  // Demo dos botões
  document.querySelectorAll('.btn-primary[data-title]').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title') || 'História';
      alert(`Abrindo: ${title}`);
    });
  });

  // CTA
  document.getElementById('cta')?.addEventListener('click', () => {
    alert('Plano mensal: R$29,90 — (placeholder)');
  });

  // ---- Mobile menu toggle (fechado por padrão) ----
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('primary-nav');
  function resetOnDesktop(){
    if (!window.matchMedia('(max-width: 880px)').matches){
      // deixa visível como barra normal
      nav.classList.remove('open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded','false');
    }
  }
  resetOnDesktop();
  window.addEventListener('resize', resetOnDesktop);

  hamburger?.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    hamburger.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });
});
