// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
// date.textContent = new Date().getFullYear();
//or
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const toggle = document.querySelector(".nav-toggle");
toggle.addEventListener("click", function () {
  //   linkContainer.classList.toggle("show-links");
  const linkConHeight = linkContainer.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;
  if (linkConHeight == 0) {
    linkContainer.style.height = `${linkHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const nav = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  if (navHeight > scrollHeight) {
    nav.classList.remove("fixed-nav");
  } else {
    nav.classList.add("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const scrollLinksId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(scrollLinksId);

    const linkConHeight = linkContainer.getBoundingClientRect().height;
    const navHeight = nav.getBoundingClientRect().height;

    let position = targetElement.offsetTop - navHeight;
    const fixedNavCheck = nav.classList.contains("fixed-nav");

    if (!fixedNavCheck) {
      position = position - navHeight;
    }
    const targetElementTop = targetElement.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
    });
    linkContainer.style.height = 0;
  });
});
