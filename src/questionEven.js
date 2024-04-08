import readlineSync from 'readline-sync';
import { getRandomInt } from './helpers.js';

const questionEven = () => {
  const randomNumber = getRandomInt(1, 10);
  const correctAnswer = randomNumber % 2 === 0;

  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
  console.log(`Question:  ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ', {
    trueValue: ['yes'],
    falseValue: ['no'],
  });

  return correctAnswer === userAnswer;
};

export default questionEven;
