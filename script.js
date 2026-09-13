(() => {
  const toast = document.getElementById('toast');
  document.querySelectorAll('[data-download]').forEach(link => {
    link.addEventListener('click', () => {
      try {
        const params = new URLSearchParams(location.search);
        const source = params.get('utm_source') || 'direct';
        const campaign = params.get('utm_campaign') || 'earnfun_x';
        localStorage.setItem('earnfun_download_source', source);
        localStorage.setItem('earnfun_download_campaign', campaign);
      } catch (_) {}
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 1800);
      }
    });
  });
})();
