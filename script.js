document.querySelectorAll('header button').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-target');
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', `#${id}`);
      }
    });
  });

window.addEventListener('load', () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }, 50);
  });

window.addEventListener('popstate', () => {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  });

  // Animação ativada ao entrar na viewport
function animarAoEntrarViewport() {
  const elementos = document.querySelectorAll('.appear');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elementos.forEach(el => observer.observe(el));
}

window.addEventListener('load', animarAoEntrarViewport);
