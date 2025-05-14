document.querySelectorAll('.orb').forEach(orb => {
  orb.addEventListener('click', () => {
    const target = orb.dataset.target;
    animateOrbToCenter(orb, target);
  });
});

function animateOrbToCenter(orb, target) {
  const rect = orb.getBoundingClientRect();
  const centerX = window.innerWidth / 2 - rect.width / 2;
  const centerY = window.innerHeight / 2 - rect.height / 2;

  gsap.to(orb, {
    duration: 0.6,
    left: centerX,
    top: centerY,
    ease: 'power2.inOut',
    onComplete: () => {
      // Later: navigate to the page or load content
      window.location.href = `pages/${target}.html`; // or trigger internal transition
    }
  });

  // Optionally fade out the others
  document.querySelectorAll('.orb').forEach(o => {
    if (o !== orb) gsap.to(o, { opacity: 0, duration: 0.4 });
  });

  gsap.to('.center-orb', { opacity: 0, duration: 0.4 });
}
