// Nickname Validation (Used on the Access Page)
function checkNickname(event) {
  event.preventDefault(); // Prevent form submission
  const nickname = document.getElementById("nickname").value.trim().toLowerCase();
  const errorMessage = document.getElementById("error-message");

  if (nickname === "jimin") {
    window.location.href = "slideshow.html"; // Redirect to slideshow
  } else {
    errorMessage.textContent = "Access denied. Incorrect nickname.";
  }
}

// Slideshow Functionality (Used on the Slideshow Page)
let currentSlide = 0;

// Show the current slide
function showSlide(index) {
  const slides = document.querySelectorAll(".slides");
  if (index >= slides.length) currentSlide = 0; // Loop back to the first slide
  if (index < 0) currentSlide = slides.length - 1; // Loop back to the last slide

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
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".slides")) {
    showSlide(currentSlide);
  }
});

// Background Music Toggle
function toggleMusic() {
  const music = document.getElementById("background-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
