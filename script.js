let currentSlide = 0;

// Show the current slide
function showSlide(index) {
  const slides = document.querySelectorAll(".slides");
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? "block" : "none";
  });
}

// Change slide on button click
function changeSlide(step) {
  showSlide(currentSlide + step);
}

// Initialize the slideshow
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
