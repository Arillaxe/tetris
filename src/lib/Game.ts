import TableImage from '../assets/table.png';

type gameOptions = {
  width: number,
  height: number,
};

export class Game {
  private tableImage: HTMLImageElement;

  constructor (
    private readonly ctx: CanvasRenderingContext2D,
    private readonly options: gameOptions,
  ) {
    this.tableImage = new Image();
    this.tableImage.src = TableImage;

    this.tableImage.onload = () => this.render();
  }

  clearScreen () {
    this.ctx.clearRect(0, 0, this.options.width, this.options.height);
  }

  render () {
    this.clearScreen();

    this.ctx.drawImage(this.tableImage, 0, 0, this.options.width, this.options.height);
  }
}
