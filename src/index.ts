import { Game } from './lib';

import './index.css';

const options = {
  screen: {
    width: 800,
    height: 800,
  },
};

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

canvas.width = options.screen.width;
canvas.height = options.screen.height;

const game = new Game(ctx, options);

game.start();

