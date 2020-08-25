const fontSizeControllerRef = document.querySelector("#font-size-control");
const resultTextRef = document.querySelector("#text");
fontSizeControllerRef.addEventListener("input", (event) => {
  resultTextRef.attributes[0].value = `font-size: ${fontSizeControllerRef.value}px;`;
});
