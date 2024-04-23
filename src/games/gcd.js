import { getRandomNumber } from '../helpers.js';
import { runGame } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }

  return getGCD(b, a % b);
};

const getRound = () => {
  const firstNumber = getRandomNumber(1, 99);
  const secondNumber = getRandomNumber(1, 99);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGCD(firstNumber, secondNumber).toString();

  return [question, answer];
};

const runGameGCD = () => {
  runGame(description, getRound);
};

export default runGameGCD;
