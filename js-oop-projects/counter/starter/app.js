class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    this.previousBtn = element.querySelector(".decrease");
    this.nextBtn = element.querySelector(".increase");
    this.resetBtn = element.querySelector(".reset");
    this.counterValue = element.querySelector(".value");
    this.counterValue.textContent = this.value;

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.nextBtn.addEventListener("click", this.increase);
    this.previousBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }
  increase() {
    this.value++;
    this.counterValue.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.counterValue.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.counterValue.textContent = this.value;
  }
}

const firstCounter = new Counter(selectElement(".first-counter"), 10);
const secondCounter = new Counter(selectElement(".second-counter"), 0);
function selectElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Your "${selection}" is not matched`);
}
