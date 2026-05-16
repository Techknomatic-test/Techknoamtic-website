import type Lenis from 'lenis';

const NAVBAR_SCROLL_OFFSET = -140;

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function scrollToElement(id: string, immediate = false) {
  const run = () => {
    const el = document.getElementById(id);
    if (!el) return;

    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(el, {
        offset: NAVBAR_SCROLL_OFFSET,
        immediate,
        duration: immediate ? 0 : 1.1,
      });
      return;
    }

    const top =
      el.getBoundingClientRect().top + window.scrollY + NAVBAR_SCROLL_OFFSET;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: immediate ? 'auto' : 'smooth',
    });
  };

  run();
  requestAnimationFrame(run);
  window.setTimeout(run, 150);
  window.setTimeout(run, 400);
}
