import { getRandomNumber } from '../helpers.js';
import { runGame } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 999;

const isEven = (randomNumber) => randomNumber % 2 === 0;

const getRound = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const runGameEven = () => {
  runGame(description, getRound);
};

export default runGameEven;
