// The site's small behaviours. Every part checks that its markup is on the page first.
const root = document.documentElement;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage can be blocked; the choice then lasts for this page only.
  }
}

// Theme
document.getElementById('theme-btn')?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  save('theme', root.dataset.theme);
});

// Phone menu
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menu-btn');
if (nav && menuBtn) {
  const setOpen = (open: boolean) => {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  };
  menuBtn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setOpen(false));
}

// The header marks the section being read: the last one whose top has passed 40% of the screen.
const spyLinks = [...document.querySelectorAll<HTMLAnchorElement>('#nav a[data-section]')];
const spySections = [...document.querySelectorAll<HTMLElement>('main section[id]')];
if (spyLinks.length) {
  const spy = () => {
    const line = innerHeight * 0.4;
    const current = spySections.filter((s) => s.getBoundingClientRect().top < line).pop();
    spyLinks.forEach((a) => a.classList.toggle('on', a.dataset.section === current?.id));
  };
  addEventListener('scroll', spy, { passive: true });
  spy();
}

// Cards and headings rise in once as they come into view.
if (!reduceMotion && 'IntersectionObserver' in window) {
  const rise = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          rise.unobserve(e.target);
        }
      }),
    { rootMargin: '0px 0px -8% 0px' },
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    el.classList.add('reveal');
    rise.observe(el);
  });
}

// A soft light follows the pointer across cards.
if (finePointer) {
  document.querySelectorAll<HTMLElement>('[data-glow]').forEach((card) => {
    card.classList.add('glow');
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

// Tabs: a [role=tablist] whose buttons name their panel in aria-controls.
document.querySelectorAll('[role="tablist"]').forEach((list) => {
  const tabs = [...list.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  tabs.forEach((tab) =>
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        const selected = t === tab;
        t.setAttribute('aria-selected', String(selected));
        const panel = document.getElementById(t.getAttribute('aria-controls') ?? '');
        if (panel) panel.hidden = !selected;
      });
      document.querySelectorAll('video').forEach((v) => v.pause());
    }),
  );
});

// Videos: a play and pause button; on a laptop, cards marked data-hover-play preview on hover.
document.querySelectorAll<HTMLButtonElement>('[data-play]').forEach((btn) => {
  const video = btn.parentElement?.querySelector('video');
  if (!video) return;
  const sync = () => {
    btn.innerHTML = `<svg><use href="#i-${video.paused ? 'play' : 'pause'}"></use></svg>`;
    btn.setAttribute('aria-label', video.paused ? 'Play video' : 'Pause video');
  };
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (video.paused) void video.play();
    else video.pause();
  });
  video.addEventListener('play', sync);
  video.addEventListener('pause', sync);
  const host = btn.closest<HTMLElement>('[data-hover-play]');
  if (host && finePointer && !reduceMotion) {
    host.addEventListener('mouseenter', () => void video.play().catch(() => {}));
    host.addEventListener('mouseleave', () => video.pause());
  }
});

// With reduced motion, a GIF stops on its first frame.
if (reduceMotion) {
  document.querySelectorAll<HTMLImageElement>('img[data-gif]').forEach((img) => {
    const freeze = () => {
      const c = document.createElement('canvas');
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      c.getContext('2d')?.drawImage(img, 0, 0);
      img.src = c.toDataURL();
    };
    if (img.complete) freeze();
    else img.addEventListener('load', freeze, { once: true });
  });
}

// Picture viewer
const viewer = document.getElementById('viewer') as HTMLDialogElement | null;
if (viewer) {
  const img = viewer.querySelector('img')!;
  const caption = viewer.querySelector('p')!;
  document.querySelectorAll<HTMLElement>('[data-full]').forEach((el) =>
    el.addEventListener('click', (e) => {
      e.preventDefault();
      img.src = el.dataset.full ?? '';
      img.alt = el.dataset.cap ?? '';
      caption.textContent = el.dataset.cap ?? '';
      viewer.showModal();
    }),
  );
  viewer.addEventListener('click', () => viewer.close());
}

// Cite: copy the BibTeX held in the button's data-bib.
document.querySelectorAll<HTMLButtonElement>('[data-bib]').forEach((btn) =>
  btn.addEventListener('click', async () => {
    const toast = btn.nextElementSibling as HTMLElement | null;
    try {
      await navigator.clipboard.writeText(btn.dataset.bib ?? '');
      if (toast) toast.textContent = 'BibTeX copied';
    } catch {
      if (toast) toast.textContent = 'The browser blocked copying';
    }
    toast?.classList.add('show');
    setTimeout(() => toast?.classList.remove('show'), 2000);
  }),
);
