import readlineSync from 'readline-sync';
import { getWelcome } from './welcome.js';

const getQuestion = (question, correctAnswer) => {
  console.log(`Question: ${question}`);

  const playerAnswer = readlineSync.question('Your answer: ');
  const result = correctAnswer === playerAnswer;
  return [result, playerAnswer];
};

const gameOver = (player, resultGame) => {
  if (resultGame) {
    console.log(`Congratulations, ${player}!`);
  } else {
    console.log(`Let's try again, ${player}!`);
  }
};

const runRounds = (description, getRound, roundsCount = 3) => {
  console.log(`${description}`);

  let i = 0;
  do {
    const [question, correctAnswer] = getRound();
    const result = getQuestion(question, correctAnswer);
    const [resultGame, playerAnswer] = result;

    if (resultGame) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      return false;
    }
  } while (i < roundsCount);

  return true;
};

const runGame = (description, getRound) => {
  const player = getWelcome();

  const resultGame = runRounds(description, getRound);

  gameOver(player, resultGame);
};

export default runGame;
