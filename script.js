const button = document.getElementById("button");
const message = document.getElementById("message");
const counter = document.getElementById("counter");

let count = 0;

button.addEventListener("click", () => {
  count++;

  message.textContent = `Кнопка нажата ${count} раз`;

  counter.textContent = `Количество нажатий: ${count}`;
});