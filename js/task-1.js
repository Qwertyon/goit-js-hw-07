const categories = document.querySelectorAll(".item");
console.log(`В списке ${categories.length} категории`);
categories.forEach((category) => {
  console.log(
    `Категория: ${category.querySelector(".category-title").textContent}`
  );
  console.log(`Количество элементов: ${category.children[1].children.length}`);
});
