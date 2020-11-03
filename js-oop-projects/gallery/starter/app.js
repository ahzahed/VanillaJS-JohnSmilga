function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallery(element) {
  this.element = element;
  this.list = [...element.querySelectorAll(".img")];
  // target
  this.modal = getElement(".modal");
  this.modalImg = getElement(".main-img");
  this.imageName = getElement(".image-name");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");

  this.closeButton = this.closeButton.bind(this);
  this.nextButton = this.nextButton.bind(this);
  this.previousButton = this.previousButton.bind(this);
  this.chooseImage = this.chooseImage.bind(this);
  // this.openModal = this.openModal.bind(this);
  this.element.addEventListener(
    "click",
    function (e) {
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (selectedImage, list) {
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${image.src}" 
    title="${image.title}" 
    id="${image.dataset.id}" 
    class="${
      image.dataset.id === selectedImage.dataset.id
        ? "modal-img selected"
        : "modal-img"
    }" alt="No Image" />`;
    })
    .join("");
  this.modal.classList.add("open");
  this.closeBtn.addEventListener("click", this.closeButton);
  this.nextBtn.addEventListener("click", this.nextButton);
  this.prevBtn.addEventListener("click", this.previousButton);
  this.modalImages.addEventListener("click", this.chooseImage);
};

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

Gallery.prototype.closeButton = function () {
  this.modal.classList.remove("open");
  this.closeBtn.removeEventListener("click", this.nextButton);
  this.prevBtn.removeEventListener("click", this.previousButton);
  this.nextBtn.removeEventListener("click", this.nextButton);
  this.chooseImage.removeEventListener("click", this.chooseImage);
};

Gallery.prototype.nextButton = function () {
  const selected = this.modalImages.querySelector(".selected");
  const next =
    selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove("selected");
  next.classList.add("selected");
  this.setMainImage(next);
};
Gallery.prototype.previousButton = function () {
  const selected = this.modalImages.querySelector(".selected");
  const prev =
    selected.previousElementSibling || this.modalImages.lastElementChild;
  selected.classList.remove("selected");
  prev.classList.add("selected");
  this.setMainImage(prev);
};
Gallery.prototype.chooseImage = function (e) {
  if (e.target.classList.contains("modal-img")) {
    const selected = this.modalImages.querySelector(".selected");
    selected.classList.remove("selected");
    this.setMainImage(e.target);
    e.target.classList.add("selected");
  }
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
