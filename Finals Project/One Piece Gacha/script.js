const fruits = [
  {
    name: 'Gomu Gomu no Mi (Rubber)',
    rarity: 'common',
    img: 'One Piece Gacha/img/gomu.png'
  },
  {
    name: 'Mera Mera no Mi (Fire)',
    rarity: 'epic',
    img: 'images/mera.png'
  },
  {
    name: 'Yami Yami no Mi (Darkness)',
    rarity: 'legendary',
    img: 'images/yami.png'
  },
  {
    name: 'Suke Suke no Mi (Invisibility)',
    rarity: 'common',
    img: 'images/suke.png'
  },
  {
    name: 'Tori Tori no Mi: Phoenix',
    rarity: 'epic',
    img: 'images/phoenix.png'
  },
  {
    name: 'Gura Gura no Mi (Quake)',
    rarity: 'legendary',
    img: 'images/gura.png'
  },
  {
    name: 'Hie Hie no Mi (Ice)',
    rarity: 'epic',
    img: 'images/hie.png'
  },
  {
    name: 'Bomu Bomu no Mi (Bomb)',
    rarity: 'common',
    img: 'images/bomu.png'
  },
  {
    name: 'Zushi Zushi no Mi (Gravity)',
    rarity: 'epic',
    img: 'images/zushi.png'
  },
  {
    name: 'Nika Nika no Mi (Sun God)',
    rarity: 'legendary',
    img: 'images/nika.png'
  }
];

const spinBtn = document.getElementById("spin-btn");
const spinBox = document.getElementById("spin-box");
const fruitName = document.getElementById("fruit-name");
const fruitImg = document.getElementById("fruit-img");
const result = document.getElementById("result");

const spinSfx = document.getElementById("spin-sfx");
const pullSfx = document.getElementById("pull-sfx");

let spinning = false;

spinBtn.addEventListener("click", () => {
  if (spinning) return;
  spinning = true;
  result.textContent = "";
  fruitImg.hidden = false;

  spinSfx.currentTime = 0;
  spinSfx.play();

  let index = 0;
  let spinsLeft = Math.floor(Math.random() * 10) + 30;
  let speed = 60;

  const spinInterval = setInterval(() => {
    const fruit = fruits[index % fruits.length];
    updateDisplay(fruit);
    index++;
    spinsLeft--;

    if (spinsLeft <= 0) {
      clearInterval(spinInterval);
      const finalFruit = fruits[(index - 1) % fruits.length];
      updateDisplay(finalFruit);

      pullSfx.currentTime = 0;
      pullSfx.play();

      result.innerHTML = `You got <strong>${finalFruit.name}</strong>!<br><em>Rarity: ${finalFruit.rarity.toUpperCase()}</em>`;
      spinning = false;
    }

    if (spinsLeft < 10) speed += 15;
  }, speed);
});

function updateDisplay(fruit) {
  fruitName.textContent = fruit.name;
  fruitImg.src = fruit.img;
  spinBox.className = fruit.rarity;
}
