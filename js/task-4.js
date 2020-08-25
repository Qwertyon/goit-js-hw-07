let currentValue = 0;

let counterValue = document.querySelector("#value");

const decrementBtnRef = document.querySelector(".js-btn-decrement");
const incrementBtnRef = document.querySelector(".js-btn-increment");

decrementBtnRef.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementBtnRef.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
