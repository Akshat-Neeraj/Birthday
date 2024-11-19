let currentSlide = 0;

// Show the current slide
function showSlide(index) {
  const slides = document.querySelectorAll(".slides");
  if (index >= slides.length) currentSlide = 0; // Loop back to the first slide
  if (index < 0) currentSlide = slides.length - 1; // Loop back to the last slide
  
  // Hide all slides and display only the current slide
  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? "block" : "none";
  });
}

// Change slide on button click
function changeSlide(step) {
  currentSlide += step;
  showSlide(currentSlide);
}

// Initialize the slideshow
showSlide(currentSlide);
