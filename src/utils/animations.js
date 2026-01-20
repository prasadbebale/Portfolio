/* Advanced Interactive Effects & Features */

/* Cursor Follow Effect (Optional Enhancement) */
/* Uncomment to add custom cursor tracking */

/*
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
*/

/* Scroll Progress Bar */
/* Add to track scroll position */

/*
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = scrollPercent + '%';
});
*/

/* Parallax Scroll Effect */
/* Add to create depth */

/*
window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  parallaxElements.forEach(el => {
    const scrollPosition = window.scrollY;
    const elementOffset = el.offsetTop;
    const distance = scrollPosition - elementOffset;
    el.style.transform = `translateY(${distance * 0.5}px)`;
  });
});
*/

/* Animated Counter Function */
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-value'));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

/* Intersection Observer for Scroll Animations */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      
      // Animate counters when section is visible
      const counters = entry.target.querySelectorAll('[data-value]');
      counters.forEach(counter => {
        if (!counter.classList.contains('animated')) {
          animateCounter(counter);
          counter.classList.add('animated');
        }
      });
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

/* Smooth Scroll Anchor Links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* Detect Reduced Motion Preference */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  document.documentElement.style.setProperty('--transition', 'none');
  document.documentElement.style.setProperty('--animation', 'none');
}

/* Mobile Touch Optimizations */
document.addEventListener('touchstart', function() {
  // Add active state class for mobile
  document.body.classList.add('touch-enabled');
}, { once: true });

/* Prevent Double Tap Zoom on Buttons */
document.querySelectorAll('button, a, input').forEach(element => {
  element.addEventListener('touchend', function(e) {
    e.preventDefault();
    this.click();
  }, false);
});

/* Optional: Add Loading States */
function setLoadingState(element, isLoading) {
  if (isLoading) {
    element.classList.add('loading');
    element.disabled = true;
  } else {
    element.classList.remove('loading');
    element.disabled = false;
  }
}

/* Optional: Add Toast Notifications */
class Toast {
  constructor(message, duration = 3000) {
    this.message = message;
    this.duration = duration;
    this.create();
  }

  create() {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = this.message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, this.duration);
  }
}

// Usage: new Toast('Success!', 3000);

/* Optional: Page Transition Effects */
function fadeOutPage() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease-out';
}

function fadeInPage() {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.3s ease-in';
}

// Add to links for page transitions
document.querySelectorAll('a[target!="_blank"]').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.href && !this.href.includes('#')) {
      e.preventDefault();
      fadeOutPage();
      setTimeout(() => {
        window.location = this.href;
      }, 300);
    }
  });
});

/* Performance Monitoring */
if (window.performance && window.performance.timing) {
  const timing = window.performance.timing;
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  console.log('Page Load Time:', loadTime + 'ms');
}

/* Lazy Load Images */
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

/* Optional CSS for Advanced Effects */
/*
.loading {
  animation: pulse 1s infinite;
}

.toast {
  position: fixed;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #0d6efd, #4db5ff);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  box-shadow: 0 0 30px rgba(77, 181, 255, 0.5);
  transition: bottom 0.3s ease;
  z-index: 1000;
}

.toast.show {
  bottom: 20px;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

/* Parallax background */
body {
  background-attachment: fixed;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
*/

export { animateCounter, Toast, setLoadingState, fadeOutPage, fadeInPage };
