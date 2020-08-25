const inputNameRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output");

inputNameRef.addEventListener("input", (event) => {
  outputNameRef.textContent = event.target.value;
  if (outputNameRef.textContent === "") {
    outputNameRef.textContent = "незнакомец";
  }
});
