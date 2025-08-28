document.addEventListener('DOMContentLoaded', () => {
  // footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const input = document.getElementById('code');
  const btn   = document.getElementById('go');
  const msg   = document.getElementById('msg');

  // Load codes from codes.json
  let validCodes = [];
  fetch('codes.json')
    .then(res => res.json())
    .then(data => { validCodes = (data && data.codes) ? data.codes.map(String) : []; })
    .catch(() => { validCodes = ['mattos123']; });

  function check(){
    const code = (input.value || '').trim();
    if (!code){
      msg.textContent = 'Digite seu código.';
      input.focus();
      return;
    }
    const ok = validCodes.includes(code);
    if (ok){
      msg.style.color = '#15803d';
      msg.textContent = 'Código válido! Redirecionando...';
      setTimeout(() => { window.location.href = 'teste.html'; }, 400);
    }else{
      msg.style.color = '#b91c1c';
      msg.textContent = 'Código inválido. Tente novamente.';
      input.focus();
      input.select();
    }
  }

  btn.addEventListener('click', check);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') check();
  });
});
