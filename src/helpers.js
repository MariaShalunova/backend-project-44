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

const getGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }

  return getGCD(b, a % b);
};

const generateProgression = (progressionLength, progressionStep) => {
  let step = 0;
  const arr = [];

  for (let i = 0; i < progressionLength; i += 1) {
    step += progressionStep;
    arr.push(step);
  }

  return arr;
};

const getProgression = (
  progressionStep,
  progressionLength,
  hiddenElementPosition,
) => {
  const arr = generateProgression(progressionLength, progressionStep);
  const sub = '..';

  const correctAnswer = String(arr.splice(hiddenElementPosition - 1, 1, sub));
  const question = arr.slice().join(' ');

  return [question, correctAnswer];
};

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number !== 1;
};

export {
  getRandomInt,
  getRandomOperation,
  isEvenNumber,
  calc,
  getGCD,
  getProgression,
  isPrime,
};
