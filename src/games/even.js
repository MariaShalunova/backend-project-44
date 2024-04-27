import { getRandomNumber } from '../helpers.js';
import { runGame } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const getRound = () => {
  const question = getRandomNumber(1, 999);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const runGameEven = () => {
  runGame(description, getRound);
};

export default runGameEven;
