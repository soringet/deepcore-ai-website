(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const panel = document.querySelector('[data-mobile-panel]');
  if(btn && panel){
    btn.addEventListener('click', () => {
      const open = panel.getAttribute('data-open') === 'true';
      panel.setAttribute('data-open', String(!open));
      panel.style.display = open ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!open));
    });
  }

  // Active nav based on pathname
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('a[data-nav]').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if(href.endsWith(path)) a.classList.add('active');
  });

  // Simple form handler (no backend): show a friendly notice.
  const form = document.querySelector('form[data-contact-form]');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.querySelector('[data-form-msg]');
      if(msg){
        msg.textContent = "Thanks — your message is ready to send. Connect this form to your email or CRM to receive enquiries.";
        msg.style.display = "block";
      }
      form.reset();
    });
  }
})();
