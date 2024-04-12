#!/usr/bin/env node
import runGame from '../src/runGame.js';
import welcome from '../src/welcome.js';
import gameOver from '../src/gameOver.js';


const NUMBER_OF_ROUNDS = 3;

const name = welcome();
runGame(NUMBER_OF_ROUNDS);
gameOver(name);
