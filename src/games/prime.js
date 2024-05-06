import { getRandomNumber } from '../helpers.js';
import { runGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1 || number % 2 === 0) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  const limit = Math.sqrt(number);
  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getRound = () => {
  const question = getRandomNumber(1, 99);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const runGamePrime = () => {
  runGame(description, getRound);
};

export default runGamePrime;
