const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("change", (event) => {
  if (event.target.value.length >= inputRef.getAttribute("data-length")) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
    console.log(inputRef);
  } else {
    inputRef.classList.add("invalid");
  }
});
