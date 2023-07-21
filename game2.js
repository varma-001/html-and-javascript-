const basket = document.querySelector('.basket');
const objectsContainer = document.querySelector('.objects');
const scoreEl = document.querySelector('#score');
let score=0;

basket.addEventListener('mousemove', (event) => {
  const x = event.clientX - basket.offsetWidth / 2;
  basket.style.transform = `translateX(${x}px)`;
});

function createObject() {
  const object = document.createElement('div');
  object.classList.add('object');
  objectsContainer.appendChild(object);

  object.addEventListener('animationend', () => {
    objectsContainer.removeChild(object);
  });

  object.addEventListener('mousedown', () => {
    objectsContainer.removeChild(object);
    score++;
    scoreEl.innerText = score;
  });
}

setInterval(createObject, 1000);
