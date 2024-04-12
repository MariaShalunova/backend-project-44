import questionEven from './questionEven.js';

const runGame = (numberOfRounds) => {
  let i = 0;
  do {
    if (questionEven()) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(
        "'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, Bill!",
      );
    }
  } while (i < numberOfRounds);
};

export default runGame;
