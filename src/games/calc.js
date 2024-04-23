import { getRandomNumber } from '../helpers.js';
import { runGame } from '../index.js';

const description = 'What is the result of the expression?';

const calc = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'error calc  Научиться обрабатывать ошибки';
  }
};

const getRound = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(operations.length - 1)];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 10);

  const question = `${number1} ${operation} ${number2}`;
  const answer = calc(number1, number2, operation).toString();

  return [question, answer];
};

const runGameCalc = () => {
  runGame(description, getRound);
};

export default runGameCalc;
