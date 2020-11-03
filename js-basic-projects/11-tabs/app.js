const article = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

article.addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  const btnId = e.target.dataset.id;
  const targetedBtn = document.getElementById(btnId);
  if (btnId) {
    btns.forEach(function (allButton) {
      allButton.classList.remove("active");
      e.target.classList.add("active");
    });
    content.forEach(function (targetedContent) {
      targetedContent.classList.remove("active");
      targetedBtn.classList.add("active");
    });
  }
});
