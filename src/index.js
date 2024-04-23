import readlineSync from 'readline-sync';
import { runWelcome } from './welcome.js';

export default runGame = (description, getRound, roundsCount = 3) => {
  console.log(`${description}`);
  const player = runWelcome();

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== playerAnswer) {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${player}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${player}!`);

  return true;
};
