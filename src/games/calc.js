import { getRandomNumber } from '../helpers.js';
import { runGame } from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperation = () => {
  const arr = ['+', '-', '*'];
  const result = arr[Math.floor(Math.random() * arr.length)];

  return result;
};

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

const getRound = () => {
  const operation = getRandomOperation();
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 10);

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = calc(firstNumber, secondNumber, operation).toString();

  return [question, correctAnswer];
};

const runGameCalc = () => {
  runGame(description, getRound);
};

export default runGameCalc;
