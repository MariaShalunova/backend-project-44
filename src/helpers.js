/* eslint-disable import/prefer-default-export */

const getRandomInt = (min = 1, max = 999) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEvenNumber = (randomNumber) => randomNumber % 2 === 0;

export { getRandomInt, isEvenNumber };
