let currentSlide = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slides");
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? "block" : "none";
  });
  currentSlide = (currentSlide + 1) % slides.length;
}

// Change slide every 3 seconds
setInterval(showSlides, 3000);

// Initial display
showSlides();
