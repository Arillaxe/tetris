export const DEFAULT_GAME_OPTIONS = {
  colors: {
    background: 'black',
  },
  screen: {
    width: 800,
    height: 800,
  },
};

export const ASSETS = {
  atlas: 'assets/tetris_atlas.png',
};

export const BRICKS_VARIATIONS = [
  // Cube
  [[0, 0], [1, 0], [0, 1], [1, 1]],

  // Stick
  [[0, 0], [0, 1], [0, 2], [0, 3]],

  // T
  [[0, 0], [0, 1], [0, 2], [1, 1]],

  // L
  [[0, 0], [0, 1], [0, 2], [1, 0]],
  [[0, 0], [0, 1], [0, 2], [1, 2]],

  // Z
  [[0, 0], [1, 0], [1, 1], [2, 1]],
  [[0, 1], [1, 1], [1, 0], [2, 1]],
];
