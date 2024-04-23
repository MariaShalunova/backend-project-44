import { getRandomNumber } from '../helpers.js';
import { runGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 99;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return number !== 1;
};

const getRound = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGamePrime = () => {
  runGame(description, getRound);
};

export default runGamePrime;
