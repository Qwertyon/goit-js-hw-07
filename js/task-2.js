const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsDOM = document.querySelector("#ingredients");
console.log(ingredientsDOM);

ingredients.forEach((ing, index) => {
  index = document.createElement("li");
  index.textContent = ing;
  ingredientsDOM.appendChild(index);
});
