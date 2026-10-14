/**
 * Bewegung auf der Seite – ruhig, nie hektisch, aus bei prefers-reduced-motion.
 * 1. [data-erscheinen]: Block gleitet beim Hineinscrollen weich nach oben.
 * 2. Überschriften (h1/h2 .display-*, [data-woerter]): Wörter steigen nacheinander aus einer Linie auf.
 */
const reduziert = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- Überschriften in Wörter zerlegen ---
function zerlege(el: HTMLElement) {
  if (el.dataset.zerlegt) return;
  el.dataset.zerlegt = '1';
  let i = 0;
  const gehe = (knoten: Node) => {
    for (const kind of [...knoten.childNodes]) {
      if (kind.nodeType === Node.TEXT_NODE) {
        const teile = (kind.textContent ?? '').split(/(\s+)/);
        const frag = document.createDocumentFragment();
        for (const t of teile) {
          if (!t) continue;
          if (/^\s+$/.test(t)) {
            frag.append(document.createTextNode(t));
            continue;
          }
          const wort = document.createElement('span');
          wort.className = 'wort';
          const innen = document.createElement('span');
          innen.textContent = t;
          innen.style.setProperty('--i', String(i++));
          wort.append(innen);
          frag.append(wort);
        }
        kind.replaceWith(frag);
      } else if (kind.nodeType === Node.ELEMENT_NODE && (kind as HTMLElement).tagName !== 'BR') {
        gehe(kind);
      }
    }
  };
  gehe(el);
  el.classList.add('woerter');
}

const ueberschriften = document.querySelectorAll<HTMLElement>('[data-woerter], main h2.display-l, main h1.display-xl');
const bloecke = document.querySelectorAll<HTMLElement>('[data-erscheinen]');

if (reduziert || !('IntersectionObserver' in window)) {
  bloecke.forEach((el) => el.classList.add('sichtbar'));
} else {
  ueberschriften.forEach(zerlege);
  const io = new IntersectionObserver(
    (eintraege) => {
      for (const e of eintraege) {
        if (e.isIntersecting) {
          e.target.classList.add('sichtbar');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );
  bloecke.forEach((el) => io.observe(el));
  ueberschriften.forEach((el) => io.observe(el));

}

// Erst ganz am Ende melden: Bricht das Skript vorher ab, greift das Sicherheitsnetz im Layout
(window as unknown as { __bewegung: boolean }).__bewegung = true;
