import { getRandomInt, isEvenNumber } from '../helpers.js';
import runGame, { welcome, getPlayerName, gameOver } from '../index.js';

const description = "Answer 'yes' if the number is even, otherwise answer 'no'.";
const minNumber = 1;
const maxNumber = 999;

const getRound = () => {
  const randomNumber = getRandomInt(minNumber, maxNumber);
  const correctAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const runGameEven = () => {
  // Player Greeting
  welcome();

  // Player name request
  const player = getPlayerName();

  // Start game
  const resultGame = runGame(description, getRound);

  // Result game
  gameOver(player, resultGame);
};

export default runGameEven;
