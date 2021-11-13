import { BRICKS_VARIATIONS } from './constants';
import { getRandomInt } from './utils';


export type Brick = {
  x: number;
  y: number;
  points: number[][];
  color: number;
}

export class BricksManager {


  getRandomBrick (): Brick {
    const color = getRandomInt(0, 6);

    return {
      x: 5,
      y: 5,
      points: BRICKS_VARIATIONS[color],
      color,
    };
  }
}
