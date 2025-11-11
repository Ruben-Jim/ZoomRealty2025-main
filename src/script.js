document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('[data-toggle="mobile-menu"]');
  const mobileMenu = document.querySelector('[data-section="mobile-menu"]');
  const mobileLinks = mobileMenu?.querySelectorAll('a[href^="#"]');
  const ctaButtons = document.querySelectorAll('[data-cta]');
  const forms = document.querySelectorAll('[data-form]');

  const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add('hidden');
    mobileToggle?.setAttribute('aria-expanded', 'false');
  };

  mobileToggle?.addEventListener('click', () => {
    if (!mobileMenu) return;
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    mobileToggle.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
  });

  mobileLinks?.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  ctaButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const intent = button.getAttribute('data-cta');

      switch (intent) {
        case 'call':
          window.location.href = 'tel:+15595550199';
          break;
        case 'consult':
          window.location.href = '#contact';
          break;
        case 'sell':
          alert('Thanks for reaching out! Hector will connect to schedule your pricing consult.');
          break;
        case 'learn':
          window.location.href = '#experience';
          break;
        case 'tour':
          alert('Request received! Hector will arrange a private tour within 24 hours.');
          break;
        case 'portfolio':
          alert('The digital portfolio is on its way to your inbox.');
          break;
        case 'schedule':
          window.location.href = '#contact';
          break;
        default:
          window.location.href = '#contact';
          break;
      }
    });
  });

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formName = form.getAttribute('data-form');
      if (formName === 'contact') {
        alert('Thank you! Hector will reply within one business day.');
      } else if (formName === 'newsletter') {
        alert('Thanks for subscribing! The latest market insights will arrive soon.');
      }

      form.reset();
    });
  });
});