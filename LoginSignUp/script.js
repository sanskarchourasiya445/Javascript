function switchTo(panel) {
    document.getElementById('loginPanel').classList.remove('active');
    document.getElementById('signupPanel').classList.remove('active');
    if (panel === 'signup') {
      document.getElementById('signupPanel').classList.add('active');
    } else {
      document.getElementById('loginPanel').classList.add('active');
    }
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }

  function handleLogin() {
    const id = document.getElementById('l-identifier').value.trim();
    const p = document.getElementById('l-password').value;
    const c = document.getElementById('l-remember').checked;
    if (!id || !p) return showToast('Please fill in all fields.');
    if (!c) return showToast('Please accept the terms to continue.');
    const name = id.includes('@') ? id.split('@')[0] : id;
    showToast('Welcome back, ' + name + '! 🎉');
  }

  function handleSignup() {
    const u = document.getElementById('s-username').value.trim();
    const e = document.getElementById('s-email').value.trim();
    const p = document.getElementById('s-password').value;
    const c = document.getElementById('s-agree').checked;
    if (!u || !e || !p) return showToast('Please fill in all fields.');
    if (p.length < 8) return showToast('Password must be at least 8 characters.');
    if (!c) return showToast('Please agree to the terms to continue.');
    showToast('Account created! Welcome, ' + u + ' ✨');
  }
