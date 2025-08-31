const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("active");

  mobileMenu.classList.toggle("active");
  openIcon.style.display = isOpen ? "block" : "none";
  closeIcon.style.display = isOpen ? "none" : "block";
});




const track = document.querySelector('.slide-track');

// Ye 4 logos ko duplicate kar raha hai taaki infinite loop ban sake
track.innerHTML += track.innerHTML;

let position = 0;
let speed = 1.5; // jitna bada karoge utni fast speed

function loop() {
  position -= speed;

  // jab aadha track scroll ho jaye to reset karo
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(loop);
}

loop();

const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Optional: click outside to close
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    mobileMenu.classList.remove("active");
  }
});







function animateCounter(counter) {
      let target = +counter.getAttribute("data-target");
      let count = 0;
      let speed = target / 100; // speed adjust karne ke liye

      let updateCount = () => {
        if (count < target) {
          count += Math.ceil(speed);
          counter.innerText = count;
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    }

    // Intersection Observer
    let counterSection = document.getElementById("counterSection");
    let counters = document.querySelectorAll(".circle");
    let started = false;

    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        counters.forEach(counter => animateCounter(counter));
        started = true;
      }
    }, { threshold: 0.5 });

    observer.observe(counterSection);
  