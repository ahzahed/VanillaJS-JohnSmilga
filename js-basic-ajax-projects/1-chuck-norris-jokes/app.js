const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const URL = "https://api.chucknorris.io/jokes/random";
btn.addEventListener("click", () => {
  fetch(URL)
    .then((response) => response.json())
    
    .then((data) => displayData(data))
    .catch((err) => console.log(err));
});

// function getUrl(url) {
//   return new Promise((resolve, reject) => {
//     const xml = new XMLHttpRequest();
//     xml.open("GET", url);
//     xml.send();
//     xml.onreadystatechange = function () {
//       if (xml.readyState !== 4) return;
//       if (xml.status == 200) {
//         resolve(xml.responseText);
//       } else {
//         reject({
//           status: xml.status,
//           text: xml.statusText,
//         });
//       }
//     };
//   });
// }

function displayData(data) {
  img.classList.add("shake-img");
  const random = Math.random() * 1000;
  setTimeout(function () {
    img.classList.remove("shake-img");
  }, random);
  const { value: jokes } = (data);
  content.textContent = jokes;
}
