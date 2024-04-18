import { getRandomInt, getProgression } from '../helpers.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getRound = () => {
  const progressionLength = getRandomInt(5, 10);
  const hiddenElementPosition = getRandomInt(1, progressionLength);
  const progressionStep = getRandomInt(1, 10);

  const progression = getProgression(
    progressionStep,
    progressionLength,
    hiddenElementPosition,
  );
  const [question, correctAnswer] = progression;

  return [question, correctAnswer];
};

const runGameProgression = () => {
  runGame(description, getRound);
};

export default runGameProgression;
