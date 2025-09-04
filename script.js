// Mobile drawer toggle
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileDrawer = document.querySelector('.mobile-drawer');
const closeDrawer = document.querySelector('.close-drawer');

mobileMenuIcon.addEventListener('click', () => {
  mobileDrawer.classList.add('show');
});

closeDrawer.addEventListener('click', () => {
  mobileDrawer.classList.remove('show');
});

// Mobile dropdown toggle
const mobileDropdownLinks = document.querySelectorAll('.mobile-dropdown > a');
mobileDropdownLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    link.parentElement.classList.toggle('open');
  });
});

// Desktop dropdown toggle
const desktopDropdownLink = document.querySelector('.nav-links ul li.dropdown > a');
desktopDropdownLink.addEventListener('click', e => {
  e.preventDefault();
  desktopDropdownLink.parentElement.classList.toggle('open');
});

// Close dropdown if clicked outside (desktop)
document.addEventListener('click', e => {
  const dropdown = desktopDropdownLink.parentElement;
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});












const aboutSection = document.querySelector('.about-section');

window.addEventListener('scroll', () => {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if(sectionTop < triggerPoint) {
    aboutSection.classList.add('show');
  }
});



// Counter Animation
const counters = document.querySelectorAll('.count-card h2');
const speed = 200; // smaller = faster

const countObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const counter = entry.target;
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if(count < target){
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
      observer.unobserve(counter);
    }
  });
}, {threshold: 0.5});

counters.forEach(counter => {
  countObserver.observe(counter);
});





//faq
// FAQ Accordion - click to toggle answer
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    const arrow = item.querySelector('.faq-arrow');

    // Toggle answer
    if(answer.style.display === 'block'){
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }

    // Toggle arrow rotation
    arrow.classList.toggle('rotate');
  });
});

// Scroll animation with staggered effect
const faqObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if(entry.isIntersecting){
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 600); // 600ms delay for each item (slow)
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.5});

faqItems.forEach(item => {
  faqObserver.observe(item);
});







// Animate Contact Section when it comes into view
const contactSection = document.querySelector('.contact-section');
const contactObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      contactSection.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.3});

contactObserver.observe(contactSection);
