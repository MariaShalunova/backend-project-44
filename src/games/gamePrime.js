import { getRandomInt, isPrime } from '../helpers.js';
import runGame from '../index.js';

const description = `Answer "yes" if the number is even, otherwise answer "no".`;
const minNumber = 1;
const maxNumber = 99;

const getRound = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGamePrime = () => {
  runGame(description, getRound);
};

export default runGamePrime;
