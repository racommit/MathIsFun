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
