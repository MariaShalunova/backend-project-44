import { getRandomInt, getGCD } from '../helpers.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  const firstNumber = getRandomInt(1, 99);
  const secondNumber = getRandomInt(1, 99);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber).toString();

  return [question, correctAnswer];
};

const runGameGCD = () => {
  runGame(description, getRound);
};

export default runGameGCD;
