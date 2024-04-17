import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');

const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const runGame = (description, getRound, numberOfRounds = 3) => {
  console.log(`${description}`);

  let i = 0;
  do {
    const result = getQuestion(getRound);
    const [, correctAnswer] = getRound();
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
  } while (i < numberOfRounds);

  return true;
};

const getQuestion = (getRound) => {
  const [question, correctAnswer] = getRound();
  console.log(`Question:  ${question}`);

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

export { welcome, getPlayerName, gameOver };
export default runGame;
