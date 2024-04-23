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
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 10);

  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = calc(number1, number2, operation).toString();

  return [question, correctAnswer];
};

const runGameCalc = () => {
  runGame(description, getRound);
};

export default runGameCalc;
