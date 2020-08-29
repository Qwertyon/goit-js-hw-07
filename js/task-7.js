const fontSizeControllerRef = document.querySelector("#font-size-control");
const resultTextRef = document.querySelector("#text");
fontSizeControllerRef.addEventListener("input", (event) => {
  resultTextRef.setAttribute(
    "style",
    `font-size: ${fontSizeControllerRef.value}px`
  );
});
