// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  const elements = Array.from(section.children).filter(
    el => !el.classList.contains('section-title')
  );

  // Animate non-title elements
  gsap.from(elements, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animate section titles separately
  const title = section.querySelector('.section-title');
  if (title) {
    gsap.from(title, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }
});

// Animate skill cards
gsap.from('.card', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.1,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '#skills',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});
