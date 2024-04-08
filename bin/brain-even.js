#!/usr/bin/env node
import runGame from '../src/runGame.js';
import welcome from '../src/welcome.js';
import gameOver from '../src/gameOver.js';

const name = welcome();
runGame();
gameOver(name);
