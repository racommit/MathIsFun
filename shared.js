/* ═══════════════════════════════════════════════
   BUKU MATEMATIKA INTERAKTIF — Shared JS
   ═══════════════════════════════════════════════ */

function toggleHint(id) {
  document.getElementById(id).classList.toggle('visible');
}

function toggleAnswer(id) {
  document.getElementById(id).classList.toggle('visible');
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// ── Proof Workshop ──
function pwNorm(s) {
  return s.replace(/\s+/g, '').replace(/²/g, '^2').replace(/³/g, '^3')
    .replace(/×/g, '*').replace(/·/g, '*').toLowerCase();
}

function pwCheck(inputId, fbId, accepts, wrongHint) {
  var el = document.getElementById(inputId);
  var fb = document.getElementById(fbId);
  var step = el.closest('.pw-step');
  var val = pwNorm(el.value);
  if (!val) {
    fb.textContent = 'Belum diisi.'; fb.className = 'pw-feedback wrong';
    el.classList.remove('correct'); el.classList.add('wrong');
    if (step) { step.classList.remove('correct'); step.classList.add('wrong'); }
    return false;
  }
  for (var i = 0; i < accepts.length; i++) {
    if (val === pwNorm(accepts[i])) {
      fb.innerHTML = '<strong>&#10003;</strong> Benar!'; fb.className = 'pw-feedback correct';
      el.classList.remove('wrong'); el.classList.add('correct');
      if (step) { step.classList.remove('wrong'); step.classList.add('correct'); }
      return true;
    }
  }
  fb.textContent = wrongHint || 'Belum tepat, coba lagi.'; fb.className = 'pw-feedback wrong';
  el.classList.remove('correct'); el.classList.add('wrong');
  if (step) { step.classList.remove('correct'); step.classList.add('wrong'); }
  return false;
}

function pwCheckSelect(selId, fbId, correctVal, correctMsg, wrongHint) {
  var el = document.getElementById(selId);
  var fb = document.getElementById(fbId);
  var step = el.closest('.pw-step');
  if (!el.value) {
    fb.textContent = 'Belum dipilih.'; fb.className = 'pw-feedback wrong';
    return false;
  }
  if (el.value === correctVal) {
    fb.innerHTML = '<strong>&#10003;</strong> ' + correctMsg; fb.className = 'pw-feedback correct';
    el.classList.remove('wrong'); el.classList.add('correct');
    if (step) { step.classList.remove('wrong'); step.classList.add('correct'); }
    return true;
  }
  fb.textContent = wrongHint || 'Belum tepat.'; fb.className = 'pw-feedback wrong';
  el.classList.remove('correct'); el.classList.add('wrong');
  if (step) { step.classList.remove('correct'); step.classList.add('wrong'); }
  return false;
}

function pwCheckNum(inputId, fbId, expected, tolerance) {
  var el = document.getElementById(inputId);
  var fb = document.getElementById(fbId);
  var step = el.closest('.pw-step');
  var val = parseFloat(el.value.replace(',', '.'));
  if (isNaN(val)) {
    fb.textContent = 'Masukkan angka.'; fb.className = 'pw-feedback wrong';
    el.classList.remove('correct'); el.classList.add('wrong');
    if (step) { step.classList.remove('correct'); step.classList.add('wrong'); }
    return false;
  }
  var tol = tolerance || 0.001;
  if (Math.abs(val - expected) < tol) {
    fb.innerHTML = '<strong>&#10003;</strong> Benar! = ' + expected; fb.className = 'pw-feedback correct';
    el.classList.remove('wrong'); el.classList.add('correct');
    if (step) { step.classList.remove('wrong'); step.classList.add('correct'); }
    return true;
  }
  fb.textContent = 'Belum tepat. Hitung lagi.'; fb.className = 'pw-feedback wrong';
  el.classList.remove('correct'); el.classList.add('wrong');
  if (step) { step.classList.remove('correct'); step.classList.add('wrong'); }
  return false;
}

function pwResult(resId, allCorrect, successMsg) {
  var el = document.getElementById(resId);
  if (allCorrect) {
    el.textContent = successMsg || 'Bukti valid! Kamu baru saja membuktikan sebuah teorema.';
    el.className = 'pw-result valid';
  } else {
    el.textContent = 'Ada langkah yang belum benar. Periksa yang ditandai merah.';
    el.className = 'pw-result invalid';
  }
}

// Cross-reference popup: tap to toggle on mobile
document.addEventListener('click', function(e) {
  var xref = e.target.closest('.xref');
  document.querySelectorAll('.xref.xref-active').forEach(function(el) {
    if (el !== xref) el.classList.remove('xref-active');
  });
  if (xref) {
    if ('ontouchstart' in window) {
      e.preventDefault();
      xref.classList.toggle('xref-active');
    }
  }
});
