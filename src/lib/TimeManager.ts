

export class TimeManager {
  private lastTime: number = Date.now();

  getDeltaTime () {
    return Date.now() - this.lastTime;
  } 

  reset () {
    this.lastTime = Date.now();
  }
}
