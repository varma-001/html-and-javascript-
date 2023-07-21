const object = document.querySelector('.object');
const container = document.querySelector('.container');
let score = 0;

object.addEventListener('click', () => {
  score++;
  document.getElementById("score").textContent=score;
});

container.addEventListener('click', () => {
  score--;
  document.getElementById("score").textContent=score;
});
