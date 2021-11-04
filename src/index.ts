import { Game } from './lib';

import './index.css';

const options = {
  width: 1100,
  height: 600,
};

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

canvas.width = options.width;
canvas.height = options.height;

const game = new Game(ctx, options);

game.render();

