/* eslint-disable import/prefer-default-export */

const getRandomInt = (min = 1, max = 999) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperation = () => {
  const arr = ['+', '-', '*'];
  const result = arr[Math.floor(Math.random() * arr.length)];

  return result;
};

const isEvenNumber = (randomNumber) => randomNumber % 2 === 0;

const calc = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'error calc';
  }
};

export {
  getRandomInt, getRandomOperation, isEvenNumber, calc,
};
