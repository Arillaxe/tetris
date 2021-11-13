import { INPUT_BINDS } from './constants';

type KeyState = {
  pressed: boolean,
  pressedThisFrame: boolean,
};

type InputState = Record<keyof typeof INPUT_BINDS, KeyState>;

export class InputManager {
  private inputState: InputState;
  
  constructor () {
    this.inputState = Object.keys(INPUT_BINDS)
      .reduce((state, key: keyof typeof INPUT_BINDS) =>
        ({ ...state, [key]: { pressed: false, pressedThisFrame: false } }), {} as InputState);

    document.onkeydown = console.log;
  }

  private handleKeydown (e: KeyboardEvent) {
    const { charCode } = e;

    this.inputState
  }

  private handleKeyup (e: KeyboardEvent) {

  }
}
