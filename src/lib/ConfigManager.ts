import { DEFAULT_GAME_OPTIONS } from './constants';

export type gameOptions = {
  colors?: {
    background: string;
  },
  screen?: {
    width: number,
    height: number,
  },
};

export class ConfigManager {
  private _options: gameOptions;

  constructor (options: gameOptions = DEFAULT_GAME_OPTIONS) {
    this._options = Object.keys(DEFAULT_GAME_OPTIONS)
      .reduce<gameOptions>((opt, key: keyof gameOptions) => ({ ...opt, [key]: options[key] || DEFAULT_GAME_OPTIONS[key] }), DEFAULT_GAME_OPTIONS);
  }

  getOptions () {
    console.log(this._options);
    return this._options;
  }
}
