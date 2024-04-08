import questionEven from './questionEven.js';

const COUNT_QUESTION_EVEN = 3;

const runGame = () => {
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
  } while (i < COUNT_QUESTION_EVEN);
};

export default runGame;
