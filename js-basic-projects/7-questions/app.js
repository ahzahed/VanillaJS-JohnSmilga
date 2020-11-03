//using selectors inside the element

const question = document.querySelectorAll(".question");
question.forEach(function (item) {
  const btn = item.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    question.forEach(function (itemAgain) {
      if (item !== itemAgain) {
        itemAgain.classList.remove("show-text");
      }
    });
    item.classList.toggle("show-text");
  });
});

// traversing the dom

// const btn = document.querySelectorAll(".question-btn");

// btn.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     const hideShow = e.currentTarget.parentElement.parentElement;

//     // if (hideShow.classList.contains("show-text")) {
//     //     hideShow.classList.remove("show-text");
//     // } else {
//     //     hideShow.classList.add("show-text");
//     // }

//     //shortcut
//     hideShow.classList.toggle("show-text");
//   });
// });
