const slides = document.querySelectorAll(".slide");
const previous = document.querySelector(".prevBtn");
const next = document.querySelector(".nextBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let count = 0;
previous.addEventListener("click", function () {
  count--;
  slidesItem();
});
next.addEventListener("click", function () {
  count++;
  slidesItem();
});
previous.style.display = "none";
function slidesItem() {
  //   if (count === slides.length) {
  //     count = 0;
  //   }
  //   if (count < 0) {
  //     count = slides.length - 1;
  //   }

  if (count == 0) {
    previous.style.display = "none";
  } else {
    previous.style.display = "block";
  }
  if (count === slides.length - 1) {
    next.style.display = "none";
  } else {
    next.style.display = "block";
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}
