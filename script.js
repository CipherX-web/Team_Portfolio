document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Project Accordion
  const projectRows = document.querySelectorAll('.project-row');
  projectRows.forEach(row => {
    row.addEventListener('click', () => {
      const item = row.closest('.project-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');

      // Close other opened accordion items
      document.querySelectorAll('.project-item.open').forEach(el => {
        el.classList.remove('open');
        const openBtn = el.querySelector('.project-row');
        if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        row.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 3. Scroll Progress Bar & Back-to-Top Button
  const progressBar = document.getElementById('progressBar');
  const toTop = document.getElementById('toTop');

  function updateScrollUI() {
    const h = document.documentElement;
    const scrollTotal = h.scrollHeight - h.clientHeight;
    const scrolled = scrollTotal > 0 ? (h.scrollTop / scrollTotal) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
    if (toTop) {
      toTop.classList.toggle('show', h.scrollTop > 500);
    }
  }

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  if (toTop) {
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Scroll Reveal Animations (Intersection Observer)
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, i * 60);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  // 5. Stat Counter Animations
  const countEls = document.querySelectorAll('.count');
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.started) {
          entry.target.dataset.started = 'true';
          const target = parseInt(entry.target.dataset.target, 10) || 0;
          let current = 0;
          const step = () => {
            current += 1;
            entry.target.textContent = current;
            if (current < target) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    countEls.forEach(el => counterObserver.observe(el));
  } else {
    countEls.forEach(el => {
      el.textContent = el.dataset.target || '0';
    });
  }

  // 6. Hero Mouse Parallax & Cursor Glow (Fine pointers only)
  const heroSection = document.getElementById('heroSection');
  const heroTrace = document.getElementById('heroTrace');
  const cursorGlow = document.getElementById('cursorGlow');

  if (heroSection && heroTrace && cursorGlow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const relX = (x / rect.width - 0.5);
      const relY = (y / rect.height - 0.5);

      heroTrace.style.transform = `translate(${relX * 14}px, ${relY * 14}px)`;
      cursorGlow.style.left = x + 'px';
      cursorGlow.style.top = y + 'px';
    });
  }

  // 7. Scrollspy Active Link Highlighting
  const sectionIds = ['about', 'team', 'projects', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const spyLinks = document.querySelectorAll('nav.links a');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          spyLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach(s => spyObserver.observe(s));
  }
});
