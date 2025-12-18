
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Header shrink on scroll
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.style.padding = '0.5rem 0';
      } else {
        header.style.padding = '1rem 0';
      }
    });

    // GSAP Animations
    gsap.to(".hero-content", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 });

    gsap.utils.toArray(".card").forEach((card, i) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 80%", toggleActions: "play none none reverse" },
        delay: i * 0.2
      });
    });

    gsap.utils.toArray(".produto-card").forEach((card, i) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 80%", toggleActions: "play none none reverse" },
        delay: i * 0.15
      });
    });
