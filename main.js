document.querySelectorAll('.top-part button').forEach(button => {
    button.addEventListener('click', function () {
      const dropdownAnswer = this.parentElement.nextElementSibling;

      // Toggle the visibility of the dropdown answer
      if (dropdownAnswer.style.maxHeight) {
        dropdownAnswer.style.maxHeight = null; // Close the dropdown
        this.textContent = "Read"; // Change button text
      } else {
        dropdownAnswer.style.maxHeight = dropdownAnswer.scrollHeight + "px"; // Open the dropdown
        this.textContent = "Close"; // Change button text
      }
    });
  });


// TESTIMONIAL CAROUSEL
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".swiper", {
      loop: true, // Allows continuous scrolling
      autoplay: {
        delay: 3000, // Time between slides (in ms)
        disableOnInteraction: false, // Autoplay continues even after interaction
      },
      pagination: {
        el: ".swiper-pagination", // Enable pagination bullets
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next", // Next button
        prevEl: ".swiper-button-prev", // Previous button
      },
      slidesPerView: 1, // Number of slides visible at a time
      spaceBetween: 20, // Space between slides
      breakpoints: {
        768: {
          slidesPerView: 2, // Show 2 slides on tablet
        },
        1024: {
          slidesPerView: 2, // Show 3 slides on desktop
        },
      },
    });
  });

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: true 
  // animations repeat
})

sr.reveal(`.top-part`)
sr.reveal(`.contents-wrapper`, {origin: 'bottom'})
sr.reveal(`.about-pic, .target-market-cards-wapper`, {origin: 'left'})
sr.reveal(`.about-text, .target-market-cards-wapper2`, {origin: 'right'})
sr.reveal(`.service-icon, .service-icon-2`, {interval: 200})
// COROUSEL

window.addEventListener('load', () => {
const preloader = document.getElementById('preloader');
preloader.style.display = 'none';
});

// NAV POPUP
// Select elements
const phoneLink = document.querySelector('.phone-link');
const popup = document.querySelector('.phone-contact-popup');
const closePopup = document.querySelector('.close-popup');
const overlay = document.createElement('div');

// Create overlay dynamically
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Show popup and blur background
phoneLink.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('active');
  overlay.classList.add('active');
});

// Hide popup and remove blur
closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
});

// Close popup when clicking outside the modal
overlay.addEventListener('click', () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
});
