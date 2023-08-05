// accordion

const accordion = document.querySelector(".accordion");
accordion.addEventListener("click", function (e) {
  const item = e.target.closest(".accordion__item");

  const body = item.querySelector(".accordion__item__body");
  item.classList.toggle("accordion__item--active");
  if (body.style.height) {
    body.style.height = null;
  } else {
    body.style.height = body.scrollHeight + "px";
  }
});

// slider

const arrowNext = document.querySelector(".controls__arrow--next");
const arrowBack = document.querySelector(".controls__arrow--back");
const slides = document.querySelectorAll(".slider__slide");
const dots = document.querySelectorAll(".dots__item");

let currSlide = 0;
let maxSlides = 4;

const activateDot = function (index) {
  dots.forEach((dot) => dot.classList.remove("dots__item--active"));
  document
    .querySelector(`.dots__item[data-index="${index}"]`)
    .classList.add("dots__item--active");
};

const goToSlide = function (index) {
  activateDot(index);
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - index)}%)`)
  );
};

const nextSlide = function () {
  currSlide == maxSlides - 1 ? (currSlide = 0) : ++currSlide;
  goToSlide(currSlide);
};

const previousSlide = function () {
  currSlide == 0 ? (currSlide = maxSlides - 1) : --currSlide;
  goToSlide(currSlide);
};

arrowBack.addEventListener("click", previousSlide);
arrowNext.addEventListener("click", nextSlide);
