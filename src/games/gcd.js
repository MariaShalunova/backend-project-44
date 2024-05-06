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
  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99);

  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2).toString();

  return [question, answer];
};

const runGameGCD = () => {
  runGame(description, getRound);
};

export default runGameGCD;
