import { getRandomInt, getRandomOperation, calc } from '../helpers.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRound = () => {
  const operation = getRandomOperation();
  const firstNumber = getRandomInt(1, 100);
  const secondNumber = getRandomInt(1, 10);

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = calc(firstNumber, secondNumber, operation).toString();

  return [question, correctAnswer];
};

const runGameCalc = () => {
  runGame(description, getRound);
};

export default runGameCalc;
