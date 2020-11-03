const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");

let count = 0;
btn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const clickedClass = e.target.classList;
    if (clickedClass.contains("decrease")) {
      count--;
    } else if (clickedClass.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});
