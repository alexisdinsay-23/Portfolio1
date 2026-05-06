// Mobile menu
function openMenu() {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// Scroll reveal animation
const revEls = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
revEls.forEach(el => revObs.observe(el));

// Skill bar animations
const bars = document.querySelectorAll('.bar-fill');
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.transform = `scaleX(${e.target.getAttribute('data-w')})`;
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
bars.forEach(b => barObs.observe(b));

// Contact form submission
async function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const txt = document.getElementById('btnText');
  const st = document.getElementById('fstatus');

  btn.disabled = true;
  txt.textContent = 'Sending...';
  st.className = 'fstatus';

  try {
    await new Promise(r => setTimeout(r, 1200));
    st.textContent = "Message sent! I'll get back to you soon.";
    st.className = 'fstatus ok';
    document.getElementById('contactForm').reset();
  } catch {
    st.textContent = 'Something went wrong. Please email me directly.';
    st.className = 'fstatus err';
  } finally {
    btn.disabled = false;
    txt.textContent = 'Send Message';
  }
}

// Active nav link highlighting
const secs = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
const navObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + e.target.id ? 'var(--gold)' : '';
      });
    }
  });
}, { threshold: 0.5 });
secs.forEach(s => navObs.observe(s));
