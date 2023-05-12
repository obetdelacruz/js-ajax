function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomNum(0, 9);

export default getRandomNum;
