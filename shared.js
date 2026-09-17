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
