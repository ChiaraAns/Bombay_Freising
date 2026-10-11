/**
 * Bewegung auf der Seite – ruhig, nie hektisch, aus bei prefers-reduced-motion.
 * 1. [data-erscheinen]: Block gleitet beim Hineinscrollen weich nach oben.
 * 2. Überschriften (h1/h2 .display-*, [data-woerter]): Wörter steigen nacheinander aus einer Linie auf.
 * 3. [data-parallax="0.1"]: Bilder bewegen sich beim Scrollen minimal langsamer als die Seite.
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

  // --- Parallaxe ---
  const parallax = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  if (parallax.length) {
    let geplant = false;
    const aktualisiere = () => {
      geplant = false;
      const h = window.innerHeight;
      for (const el of parallax) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > h + 200) continue;
        const mitte = r.top + r.height / 2 - h / 2;
        const staerke = Number(el.dataset.parallax) || 0.08;
        el.style.setProperty('--parallax', `${(-mitte * staerke).toFixed(1)}px`);
      }
    };
    const plane = () => {
      if (!geplant) {
        geplant = true;
        requestAnimationFrame(aktualisiere);
      }
    };
    window.addEventListener('scroll', plane, { passive: true });
    window.addEventListener('resize', plane);
    aktualisiere();
  }
}
