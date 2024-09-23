let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
  showSlide(currentIndex + n);
}

function autoSlide() {
  moveSlide(1);
  setTimeout(autoSlide, 8000);
}

window.onload = () => {
  showSlide(currentIndex);
  autoSlide();
};
