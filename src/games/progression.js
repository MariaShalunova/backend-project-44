import { getRandomNumber } from '../helpers.js';
import { runGame } from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (startNumber, progressionStep, progressionLength) => {
  const arr = [];

  for (let i = 0; i < progressionLength; i += 1) {
    startNumber += progressionStep;
    arr.push(startNumber);
  }

  return arr;
};

const getRound = () => {
  const startNumber = getRandomNumber(1, 999);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);

  const arr = generateProgression(startNumber, progressionStep, progressionLength);

  const hiddenElementPosition = getRandomNumber(1, progressionLength);
  const sub = '..';

  const correctAnswer = String(arr.splice(hiddenElementPosition - 1, 1, sub));
  const question = arr.slice().join(' ');

  return [question, correctAnswer];
};

const runGameProgression = () => {
  runGame(description, getRound);
};

export default runGameProgression;
