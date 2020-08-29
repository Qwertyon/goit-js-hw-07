const inputRef = document.querySelector("#validation-input");
const lengthOfValidInput = inputRef.getAttribute("data-length");

inputRef.addEventListener("change", (event) => {
  if (event.target.value.length >= lengthOfValidInput) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
});
