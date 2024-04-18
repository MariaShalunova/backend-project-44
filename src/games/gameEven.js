import { getRandomInt, isEvenNumber } from '../helpers.js';
import runGame from '../index.js';

const description = `Answer "yes" if the number is even, otherwise answer "no".`;
const minNumber = 1;
const maxNumber = 999;

const getRound = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGameEven = () => {
  runGame(description, getRound);
};

export default runGameEven;
